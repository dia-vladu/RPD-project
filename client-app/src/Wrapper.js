import './Wrapper.css';
import Content from './Content';
import Navbar from './Navbar';

function Wrapper() {
    return (
        <div className="wrapper">
            <Navbar />
            <Content />
        </div>
    )
}

export default Wrapper;