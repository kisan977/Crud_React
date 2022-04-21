import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6260eb34f429c20deb97b8a5.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, layout, name, capacity, status) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("layout", layout);
    localStorage.setItem("name", name);
    localStorage.setItem("capacity", capacity);
    localStorage.setItem("status", status);
    // localStorage.setItem("selectedFile", selectedFile);
  };

  const getData = () => {
    axios
      .get(`https://6260eb34f429c20deb97b8a5.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6260eb34f429c20deb97b8a5.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Layout</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Capacity</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            {/* <Table.HeaderCell>Image</Table.HeaderCell> */}
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.layout}</Table.Cell>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.capacity}</Table.Cell>
                {/* <Table.Cell>{data.selectedFile}</Table.Cell> */}
                <Table.Cell>
                  {data.status === true ? "Online" : "Offline"}
                </Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      color="green"
                      onClick={() =>
                        setData(
                          data.id,
                          data.layout,
                          data.name,
                          data.capacity,
                          data.status
                          // data.selectedFile
                        )
                      }
                    >
                      Update
                    </Button>
                  </Link>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
