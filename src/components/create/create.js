import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import "./create.css";

export default function Create() {
  let history = useHistory();
  const [layout, setLayout] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState();
  const [status, setStatus] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);

  const sendDataToAPI = () => {
    axios
      .post(`https://6260eb34f429c20deb97b8a5.mockapi.io/Crud`, {
        layout,
        name,
        capacity,
        status,
        // selectedFile,
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div className="form-container">
      <Form>
        <Form.Field>
          <label>Layout</label>
          <select
            name="layout"
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
          >
            <option value="Select Layout">Select Layout</option>
            <option value="4*4">4*4</option>
            <option value="3*3">3*3</option>
            <option value="2*2">2*2</option>
            <option value="1*1">1*1</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Capacity</label>
          <input
            name="capacity"
            placeholder="Capacity"
            onChange={(e) => setCapacity(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <input
            type="checkbox"
            name="status"
            placeholder="status"
            onChange={(e) => setStatus(e.target.checked)}
            value={status}
          />
        </Form.Field>
        {/* <Form.Field>
          <label>Choose your Image</label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            value={selectedFile}
            name="avatar"
            onfile
            accept="image/png, image/jpeg"
          ></input>
        </Form.Field> */}
        <Button type="submit" onClick={sendDataToAPI}>
          Create Table
        </Button>
      </Form>
    </div>
  );
}
