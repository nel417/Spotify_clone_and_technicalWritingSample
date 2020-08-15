import React from "react";
import Header from "./Header";
import SongRow from "./SongRow";
import "./StyleSheets/Body.css";
import { useDataLayerValue } from "../state/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="Discover Weekly" />
        <div className="body__infoText">
          <strong> PLAYLIST </strong> <h2> discover weekly </h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} /> 
		))}
			 
      </div>
    </div>
  );
}
