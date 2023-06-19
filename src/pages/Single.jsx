import React from "react";
import bg from "../img/c.png";
import happy from "../img/happy.png";
import edit from "../img/edit.png";
import deletee from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={bg} alt="" srcset="" />
        <div className="user">
          <img src={happy} alt="" srcset="" />
          <div className="info">
            <span>john</span>
            <span>posted 2 days ago</span>
          </div>
          <div className="edit">
            <img src={edit} alt="" srcset="" />
            <img src={deletee} alt="" srcset="" />
          </div>
        </div>
        <div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
         
          </h1>
          <p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptas veritatis dignissimos repellendus maxime iste. Alias sapiente aliquid fuga exercitationem repellendus nesciunt velit, non nisi aspernatur, obcaecati, iste porro accusamus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptas veritatis dignissimos repellendus maxime iste. Alias sapiente aliquid fuga exercitationem repellendus nesciunt velit, non nisi aspernatur, obcaecati, iste porro accusamus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptas veritatis dignissimos repellendus maxime iste. Alias sapiente aliquid fuga exercitationem repellendus nesciunt velit, non nisi aspernatur, obcaecati, iste porro accusamus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptas veritatis dignissimos repellendus maxime iste. Alias sapiente aliquid fuga exercitationem repellendus nesciunt velit, non nisi aspernatur, obcaecati, iste porro accusamus.
            </p>
          </p>
        </div>
      </div>

      <Menu/>
    </div>
  );
};

export default Single;