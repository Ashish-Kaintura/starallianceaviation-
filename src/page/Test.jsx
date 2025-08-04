import React, { useEffect,useState } from "react";

export default function Test() {
  const [data, setData] = React.useState([]);
  const [postResponse, setPostResponse] = useState(null);
  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
      console.log("Data fetched successfully:", result);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  const Createpost = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      });

      const data = await res.json();
      setPostResponse(data);
    } catch (err) {
      console.error("POST Error:", err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">API Example</h2>
      {data && (
        <div>
          <p>
            <strong>Fetched (GET):</strong> {data.title}
          </p>
        </div>
      )}
      <div className="space-x-2 mt-4">
        <button onClick={Createpost}>POST</button>
        {/* <button onClick={updatePost}>PUT</button>
        <button onClick={patchPost}>PATCH</button>
        <button onClick={deletePost}>DELETE</button> */}
      </div>
       {postResponse && (
        <div className="mt-4">
          <p><strong>POSTed:</strong> {postResponse.title}</p>
        </div>
      )}
    </div>
  );
}
