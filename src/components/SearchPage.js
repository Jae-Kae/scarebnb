import { Button } from "@mui/material";
import React from "react";
import "../css/SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>53 stays ◦ 26 august to 30 august ◦ 2 guests</p>
        <h1>Scares nearby</h1>
        <Button variant="outlined">Cancellation</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
                img="https://blog.apartmentsearch.com/wp-content/uploads/2016/10/haunted-apartment-buildings-in-america.jpg"
                location="Entire home in center of Montreal"
                title="Stay at this spacious European House"
                description="6 guest · 4 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$35 / night"
                total="$207 total"
            />

            <SearchResult
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fbackpackersverse%2Fwp-content%2Fuploads%2F2016%2F09%2F01214813%2FPark-Lane-Apartments-in-Arlington-Texas.jpg&f=1&nofb=1"
                location="Private apartment in center of Montreal"
                title="Independant luxury haunted apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                total="$157 total"
            />

            <SearchResult
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fwebbab3p2bo11.jpg&f=1&nofb=1"
                location="Private space in center of Montreal"
                title="Spooky Montreal Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />
            <SearchResult
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.newyorker.com%2Fphotos%2F59f757b3dff80a192968cce2%2F16%3A9%2Fw_1200%2Ch_630%2Cc_limit%2FCohn-The-Haunted-Apartment.jpg&f=1&nofb=1"
                location="Private space in center of Montreal"
                title="30 mins to St Laurent, rue Delinelle"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />
            <SearchResult
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa0.muscache.com%2Fim%2Fpictures%2F07e099a3-6762-4bf3-977e-47665b01b83c.jpg%3Faki_policy%3Dx_large&f=1&nofb=1"
                location="Private space in center of Montreal"
                title="Spacious Haunted Bedrooms"
                description="8 guest · 4 bedroom · 4 bed · 2 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />
            <SearchResult
                img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.ultraswank.net%2Fuploads%2Fparis-ghost-apartment-11-1000x750.jpg&f=1&nofb=1"
                location="Private space in center of Montreal"
                title="The Dark Rooms In Montreal"
                description="2 guest · 5 bedroom · 5 bed · 2 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="$65 / night"
                total="$480 total"
            />
            <SearchResult
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2t1047w253zzm.cloudfront.net%2Fblog%2F2015%2F10%2FSD.jpeg&f=1&nofb=1"
                location="Private space in center of Montreal"
                title="5 Star Luxury Spooky Apartment"
                description="8 guest · 5 bedroom · 8 bed · 3 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                total="$650 total"
            />
    </div>
  );
};

export default SearchPage;
