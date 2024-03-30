const audioPlayer = document.getElementById('audioPlayer');
const audioFileInput = document.getElementById('audioFileInput');

audioFileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const objectURL = URL.createObjectURL(file);
  audioPlayer.src = objectURL;
});

function downloadAudio() {
  const url = audioPlayer.src;
  const fileName = 'audio.mp3';
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
}

function uploadAudio() {
  const file = audioFileInput.files[0];
  const formData = new FormData();
  formData.append('audioFile', file);

  fetch('upload-audio.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
}

function applyFilters() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(audioPlayer);
  const filter = audioContext.createBiquadFilter();

  filter.type = 'lowpass';
  filter.frequency.value = 1000;

  source.connect(filter);
  filter.connect(audioContext.destination);
}