function quantity({topps}) {
    const h1 = {
        textAlign: "center",
        marginTop: "100px",
        marginBottom: "50px",
        backgroundColor: "lightblue",
        color: "red",
        width: "500px",
      };

    var total = topps.length;

    return (<div>
        <h1 style={h1}> Total Cards : {total} </h1>
        </div>
    )}

export default quantity