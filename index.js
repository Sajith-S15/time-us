function updateTimes() {
  const now = luxon.DateTime.now();
  const hawaiiTime = now.setZone("Pacific/Honolulu").toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  const alaskaTime = now.setZone("America/Anchorage").toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  const pacificTime = now.setZone("America/Los_Angeles").toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  const mountainTime = now.setZone("America/Denver").toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  const centralTime = now.setZone("America/Chicago").toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  const easternTime = now.setZone("America/New_York").toLocaleString({
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });

  document.getElementById('hawaii-time').textContent = `Hawaii Time: ${hawaiiTime}`;
  document.getElementById('alaska-time').textContent = `Alaska Time: ${alaskaTime}`;
  document.getElementById('pacific-time').textContent = `Pacific Time: ${pacificTime}`;
  document.getElementById('mountain-time').textContent = `Mountain Time: ${mountainTime}`;
  document.getElementById('central-time').textContent = `Central Time: ${centralTime}`;
  document.getElementById('eastern-time').textContent = `Eastern Time: ${easternTime}`;
}

updateTimes();
setInterval(updateTimes, 1000);
