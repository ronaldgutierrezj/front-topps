import Topp from "../components/topp";

const AllTopps  = (props) => {
    return props.topps.map((topp) => {
        return <Topp topp={topp} key={topp._id} />});
};

export default AllTopps;