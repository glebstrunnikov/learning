const myHeaders = new Headers();

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

myHeaders.append("apikey", "fj6SVuIO2GI7tBl68TqMR4UABTasP9yt");
// checkIfDomainExists('https://zxjjcapcvaslhfajshdu.com', function(exists) {console.log(exists)})
class Request {
  constructor(url) {
    this.url = url;
  }
  requestEmail(url) {
    fetch(
      `https://api.apilayer.com/email_verification/${this.url}`,
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log(JSON.parse(result));
        if (
          JSON.parse(result).syntax_valid === undefined ||
          JSON.parse(result).syntax_valid === "false"
        ) {
          drawErr("Email format not valid");
        }
      })
      .catch((error) => console.log("error", error));
  }
}

// походу апиха email verification глючит, выдает неверные данные. Ну что за дела, мне лень искать еще одну и снова все переделывать

async function checkSetCoords(city) {
  const coordsResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=5c164962ce5b597097caf8d53bd68ef6`
  );
  const coordsResponseData = coordsResponse.json();
  coordsResponseData
    // .then(data => this.checkErr(data))
    .then((data) => {
      if (data.length === 0) {
        drawErr("There's no such city!");
      }
      console.log(data);
    })
    .catch(() => {
      drawErr("Something went wrong");
    });
}
