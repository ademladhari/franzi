export const processTextAndReferences = (text) => {
    // Split text into sections based on double newlines
    const sections = text.split('\n\n');
    
    // Initialize arrays to store processed sections and references
    const processedSections = [];
    const references = [];
    let currentTitle = "Introduction";
    
    sections.forEach(section => {
      // Skip empty sections
      if (!section.trim()) return;
      
      // Check if section is a title (starts with **)
      if (section.trim().startsWith('**')) {
        currentTitle = section.trim().replace(/\*\*/g, '').trim();
        processedSections.push(section);
        return;
      }
      
      // Split section into lines
      const lines = section.split('\n');
      const cleanLines = [];
      const sectionRefs = [];
      
      lines.forEach(line => {
        // Check if line contains http(s)
        if (line.includes('http')) {
          // Extract URLs from the line
          const urls = line.match(/(https?:\/\/[^\s,)]+)/g);
          if (urls) {
            sectionRefs.push(...urls);
          }
        } else if (line.trim()) {
          // Add non-empty, non-reference lines to clean lines
          cleanLines.push(line.trim());
        }
      });
      
      // If we found references, add them to our references array
      if (sectionRefs.length > 0) {
        references.push({
          title: currentTitle,
          refs: sectionRefs
        });
      }
      
      // Add cleaned section text to processed sections
      if (cleanLines.length > 0) {
        processedSections.push(cleanLines.join('\n'));
      }
    });
    
    // Join processed sections back together
    const cleanText = processedSections.join('\n\n');
    
    return {
      cleanText,
      references
    };
  };
  
  // Example usage:
