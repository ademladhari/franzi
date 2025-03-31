export const parseText = (text) => {
    const parts = text.split(/(\*.*?\*)/); // Split by *something*
  
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        const imageName = part.slice(1, -1); // Remove the * characters
        const imageSrc = imageMap[imageName]; // Lookup in the imageMap
  
        if (imageSrc) {
          return (
            <img
              key={index}
              src={imageSrc}
              alt={imageName}
              className="float-right h-[300px] w-[300px] mr-4 mb-2" // Adjust size and margin
            />
          );
        }
      }
      // Return the text part
      return part;
    });
  };