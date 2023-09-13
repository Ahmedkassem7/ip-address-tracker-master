const inputip = document.querySelector("input");
const ipaddress = document.getElementById("ipaddress");
const loca = document.getElementById("location");
const Time = document.getElementById("timezone");
const ISP = document.getElementById("isp");

function fetch_ip() {
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_CzUDNCMNEeMQypBAHJMhR0A4Jq1T6&ipAddress=${inputip.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showIP(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showIP(data) {
  const { ip, location, isp } = data;
  ipaddress.innerHTML = ip;
  loca.innerHTML = `${location.city}, ${location.country} ${location.postalCode}`;
  Time.innerHTML = `UTC ${location.timezone}`;
  ISP.innerHTML = isp;
}
fetch_ip();
