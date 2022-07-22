import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/OnePlus-Nord-2T-5G-NPI-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGY3Lzk4NjAwNjcwNjU4ODYuanBnfGEzZDhiNmRmYjBiYzg1YzFjOGI5MmFkMGJlZjYzMTAyY2FkNzNkMzIwNTdkYWM2ZTA0YzlkNzFjOTZiN2E1NDA"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/Oppo-Reno-8PRO-NPI-D-18.04.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2g3My85ODYyNDM3NTY4NTQyLmpwZ3xkZmM1MDIxODRlYTc4MjRjMzhiODBhNmY5ZjdlYmVlMjdhOWNkMjYxMmU4Y2U2Yjk2YjA4OWNhMWRmYjMxYTFi"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/Samsung-Smart-HD-TV-NPI-D-11.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzk4NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gwOC85ODYyNDU3NjU1MzI2LmpwZ3wxZjgxYTE3OTBjMjE4Zjg1YzEwZGU1ZjkzYzFkYjc2Yjg4YjQzNjkxNjQyNzQyMTkxNmIwMTA2MDcxNDk2YWNh"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Dial-NPI-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2g1Mi85ODYwNjY3ODAxNjMwLmpwZ3wyY2UxNjU1ZDQ1N2NjOTc4MmNhZjE2NTk1YTAwNDIwMjFjYjA2MzNhOGUxY2Y1YmYyMWI1NmZjZmQ0ZjNjNGNk"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/Sony-Bluetooth-WI-C100-D-NPI-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjE1NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2g4My85ODYyNDMwODUxMTAyLmpwZ3xlZmRjZTEzZWI3YWYwMTlhNWY2YmVhMjMyNDJhZWEzYmZlMDFjMzRjYjI3YTE0Y2NkYThkZmE1MjZlODYzMDI5"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Banner;