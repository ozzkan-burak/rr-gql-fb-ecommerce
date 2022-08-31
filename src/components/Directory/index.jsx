import { PropTypes } from "prop-types";
import ShopMen from "../../assets/img/shopMens.jpeg";
import ShopWomen from "../../assets/img/shopWomens.jpeg"; 


const Directory = props => {
  return (
    <div className="directory-container">
      <div className="directory-wrapper">
        <div
          className="directory-wrapper__item"
          style={{ backgroundImage: `url(${ShopMen})` }}
        >
          <a>Shop Mwns</a>
        </div>
        <div
          className="directory-wrapper__item"
          style={{ backgroundImage: `url(${ShopWomen})` }}
        >
          <a>Shop Mwns</a>
        </div>
      </div>
    </div>
  );
}

Directory.propTypes = {

}
Directory.defaultProps ={}


export default Directory;
