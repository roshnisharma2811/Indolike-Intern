document.querySelector('.search-box').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      alert('Searching for: ' + this.value);
    }
  });
  