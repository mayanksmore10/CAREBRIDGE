document.addEventListener('DOMContentLoaded', () => {
  const uploadBtn = document.getElementById('uploadBtn');
  const fileInput = document.getElementById('fileInput');
  const recordsList = document.querySelector('.records');

  // Allowed file types
  const allowedTypes = ['image/png', 'application/pdf'];

  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      if (!allowedTypes.includes(file.type)) {
        alert('Only PNG and PDF files are allowed.');
        fileInput.value = ''; // Reset file input
        return;
      }

      const fileURL = URL.createObjectURL(file);

      // Create new list item
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';

      li.innerHTML = `
        <span>${file.name}</span>
        <div>
          <a href="${fileURL}" target="_blank" rel="noopener noreferrer" style="margin-right: 15px;">View</a>
          <button class="btn-remove">Remove</button>
        </div>
      `;

      // Add remove button event
      li.querySelector('.btn-remove').addEventListener('click', () => {
        // Optional: revoke object URL to free memory
        URL.revokeObjectURL(fileURL);
        li.remove();
      });

      recordsList.appendChild(li);

      alert(`Uploaded: ${file.name}`);

      fileInput.value = ''; // Clear input
    }
  });
});
