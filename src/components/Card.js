import React from "react";
import Checkbox from "./Checkbox";
import Heading from "./Heading";
import Input from "./Input";
import Subheading from "./Subheading";

export default function Card({ data, bgColor }) {
  return (
    <div className="card-wrapper c-info">
      <div className="card card-info" style={{ backgroundColor: bgColor }}>
        <div className="card-container">
          <Subheading value="Subheader" />
          <form id="form">
            <Input
              handleInput={(e) => e.preventDefault}
              active={false}
              type="text"
              label="Name"
              placeholder="name"
              data={data.name}
              id="name"
              name="name"
            />
            <Input
              handleInput={(e) => e.preventDefault}
              active={false}
              type="text"
              label="Surname"
              placeholder="Surname"
              data={data.surname}
              id="surname"
              name="surname"
            />
            <Input
              handleInput={(e) => e.preventDefault}
              active={false}
              type="text"
              label="Favorite color"
              placeholder="Favorite color"
              data={data.favcolor}
              id="favcolor"
              name="favcolor"
              $
            />
            <Input
              handleInput={(e) => e.preventDefault}
              active={false}
              type="email"
              label="Email"
              placeholder="Email address"
              data={data.email}
              id="email"
              name="email"
            />
            <Input
              handleInput={(e) => e.preventDefault}
              active={false}
              type="number"
              label="Age"
              placeholder="Age"
              data={data.age}
              id="age"
              name="age"
              $
            />
            <Checkbox
              active={true}
              value="Subscribed for notifications"
              checked={data.notif}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
