const Box = () => {
  return (
    <>
      micro-app http://localhost:3000/
      <micro-app
        name="my-app"
        url="http://localhost:3000/"
        style={{ width: 400, height: 500 }}
      />
      <div
        style={{ width: '900px', border: '1px solid #ccc', margin: '5px 0' }}
      />
      iframe http://localhost:3000/
      <iframe
        src="http://localhost:3000/"
        style={{ width: 400, height: 200 }}
      ></iframe>
    </>
  );
};

export default Box;
