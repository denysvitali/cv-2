#!/usr/bin/env node

/**
 * PDF Page Content Test
 * 
 * This script tests the generated CV PDF to detect and prevent empty pages.
 * It analyzes the PDF structure and content to ensure no blank pages are present.
 */

const fs = require('fs');
const path = require('path');

// Simple PDF page detection - looks for PDF page markers
function analyzePDFPages(pdfPath) {
  if (!fs.existsSync(pdfPath)) {
    throw new Error(`PDF file not found: ${pdfPath}`);
  }

  const pdfBuffer = fs.readFileSync(pdfPath);
  const pdfString = pdfBuffer.toString('binary');
  
  // Count page objects in PDF
  const pageMatches = pdfString.match(/\/Type\s*\/Page[^s]/g) || [];
  const pageCount = pageMatches.length;
  
  // Look for content streams
  const contentStreams = pdfString.match(/stream[\s\S]*?endstream/g) || [];
  const nonEmptyStreams = contentStreams.filter(stream => {
    // Filter out very small streams (likely empty or minimal content)
    const streamContent = stream.replace(/^stream\s*/, '').replace(/\s*endstream$/, '');
    return streamContent.length > 50; // Arbitrary threshold for "meaningful" content
  });
  
  console.log(`📄 PDF Analysis Results:`);
  console.log(`   Total pages found: ${pageCount}`);
  console.log(`   Content streams: ${contentStreams.length}`);
  console.log(`   Non-empty streams: ${nonEmptyStreams.length}`);
  
  // Heuristic: if we have significantly more pages than content streams, 
  // we likely have empty pages
  const suspiciousEmptyPages = pageCount > nonEmptyStreams.length + 1;
  
  if (suspiciousEmptyPages) {
    console.log(`⚠️  Warning: Detected potential empty pages!`);
    console.log(`   Pages: ${pageCount}, Content streams: ${nonEmptyStreams.length}`);
    return false;
  }
  
  console.log(`✅ PDF appears to have good page content distribution`);
  return true;
}

// Test function for page break validation
function validatePageBreaks() {
  console.log(`🔍 Validating CV page break configuration...`);
  
  const experienceFile = path.join(__dirname, 'src/components/CVExperience.vue');
  
  if (!fs.existsSync(experienceFile)) {
    throw new Error('CVExperience.vue not found');
  }
  
  const content = fs.readFileSync(experienceFile, 'utf8');
  
  // Find pageBreak: true entries
  const pageBreakMatches = content.match(/pageBreak:\s*true/g) || [];
  const pageBreakCount = pageBreakMatches.length;
  
  console.log(`📋 Page break configuration:`);
  console.log(`   Found ${pageBreakCount} explicit page breaks`);
  
  // Warning if too many page breaks
  if (pageBreakCount > 4) {
    console.log(`⚠️  Warning: ${pageBreakCount} page breaks may cause empty pages`);
    return false;
  }
  
  console.log(`✅ Page break configuration looks reasonable`);
  return true;
}

async function main() {
  console.log(`🧪 CV PDF Page Content Test\n`);
  
  try {
    // Validate page break configuration
    const pageBreaksOk = validatePageBreaks();
    
    // Check if PDF exists and analyze it
    const pdfPath = path.join(__dirname, 'cv.pdf');
    let pdfOk = true;
    
    if (fs.existsSync(pdfPath)) {
      pdfOk = analyzePDFPages(pdfPath);
    } else {
      console.log(`📄 PDF not found at ${pdfPath} - run build first`);
    }
    
    console.log(`\n📊 Test Results:`);
    console.log(`   Page breaks: ${pageBreaksOk ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`   PDF analysis: ${pdfOk ? '✅ PASS' : '❌ FAIL'}`);
    
    if (!pageBreaksOk || !pdfOk) {
      console.log(`\n💡 Recommendations:`);
      console.log(`   - Review pageBreak: true flags in CVExperience.vue`);
      console.log(`   - Consider using break-after: auto instead of always`);
      console.log(`   - Add minimum content requirements after page breaks`);
      process.exit(1);
    }
    
    console.log(`\n🎉 All tests passed!`);
    
  } catch (error) {
    console.error(`❌ Test failed:`, error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { analyzePDFPages, validatePageBreaks };