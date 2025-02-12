import Card from "react-bootstrap/Card";

function GroupExample() {
  const cardsData = [
    {
      imgSrc:
        "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?semt=ais_hybrid",
      title: "Our Products 1",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      footer: "Last updated 3 mins ago",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_640.jpg",
      title: "Our Products 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      footer: "Last updated 3 mins ago",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Our Products 3",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      footer: "Last updated 3 mins ago",
    },
    {
      imgSrc:
        "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
      title: "Our Products 4",
      text: "This is a copy of the first card with a new image and different content.",
      footer: "Last updated 5 mins ago",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_640.jpg",
      title: "Our Products 5",
      text: "This is a copy of the second card with a new image.",
      footer: "Last updated 5 mins ago",
    },
    {
      imgSrc:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3RwMjM4LXBmLXM3My0wNS1tb2NrdXAuanBn.jpg",
      title: "Our Products 6",
      text: "This is a copy of the third card with new content and a different image.",
      footer: "Last updated 5 mins ago",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "10px",
      }}
    >
      {cardsData.map((card, index) => (
        <div key={index} style={{ flex: "0 0 30%", marginBottom: "20px" }}>
          <Card>
            <Card.Img
              style={{ height: "350px" }}
              variant="top"
              src={card.imgSrc}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{card.footer}</small>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default GroupExample;
