import { useState } from "react";
import "./PriceCalc.scss";

const demo = [
  {
    name: "ESPN",
    category: "Sports",
    price: 5.99,
    image: "https://example.com/logos/espn.png",
    selected: false,
    id: 1,
  },
  {
    name: "CNN",
    category: "News",
    price: 3.99,
    image: "https://example.com/logos/cnn.png",
    selected: false,
    id: 2,
  },
  {
    name: "HBO",
    category: "Movies",
    price: 10.99,
    image: "https://example.com/logos/hbo.png",
    selected: false,
    id: 3,
  },
  {
    name: "Discovery Channel",
    category: "Documentary",
    price: 4.99,
    image: "https://example.com/logos/discovery.png",
    selected: false,
    id: 4,
  },
  {
    name: "Cartoon Network",
    category: "Kids",
    price: 2.99,
    image: "https://example.com/logos/cartoon_network.png",
    selected: false,
    id: 5,
  },
];

function PriceCalc({ selectedPartners, handleSelectedPartners, spTotalPrice }) {
  // const [selectedItems, setSelectedItems] = useState([]);

  // // Getting clickedItem and put into selectedItems array when clicked
  // // When clicked again remove clickedItem from selectedItems array
  // const handleItemClick = (clickedItem) => {
  //   setSelectedItems((prevSelectedItems) =>
  //     prevSelectedItems.some((item) => item.id === clickedItem.id)
  //       ? prevSelectedItems.filter((item) => item.id !== clickedItem.id)
  //       : [...prevSelectedItems, clickedItem]
  //   );
  // };

  // console.log(selectedItems);

  // const calculatedPrice = (selectedItems) => {
  //   if (selectedItems !== " ") {
  //     return selectedItems.reduce((sum, item) => sum + item.price, 0);
  //   } else {
  //     console.log("Arrayempty");
  //   }
  // };

  // const totalPrice = calculatedPrice(selectedItems);

  return (
    <div>
      <h2>Summary </h2>
      <h3>TV</h3>
      {/* {selectedItems.map((channel) => (
        <p key={channel.id}>{channel.name}</p>
      ))} */}

      <h3>Streaming</h3>

      {selectedPartners.map((channel) => (
        <img
          key={channel.id}
          className="image"
          src={channel.imageURL}
          alt="logo"
        />
      ))}

      <h3>Bundles</h3>

      {/* {selectedItems.map((channel) => (
        <p key={channel.id}>{channel.name}</p>
      ))} */}

      {/* <p>{totalPrice.toFixed(2)}</p> */}
    </div>
  );
}

export default PriceCalc;
