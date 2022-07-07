import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  user: "",
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  setUser: (email) => {},
  removeFavorite: (meetupId) => {},
  setUserStatus: (uid) => {},
  approvedChecked: () => {},
  itemIsFavorite: (uid) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function setUserHandler(email) {
    console.log("context" + email);
    setAuthenticatedUser(email);
    console.log(authenticatedUser);
  }

  function removeFavoriteHandler(uid) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.email !== uid);
    });
  }

  function setUserStatusHandler(uid) {
    let temp_state = [
      ...userFavorites.filter((meetup) => meetup.email === uid),
    ];
    let temp_element = { ...temp_state[0] };
    temp_element.status = "Approved";
    temp_state[0] = temp_element;
    let updatefav = userFavorites.concat(temp_state);
    let filterupdate = updatefav.filter(
      (meetup) => meetup.email == uid && meetup.status !== "Pending"
    );
    let filterconcat = userFavorites.filter((meetup) => meetup.email !== uid);
    setUserFavorites(filterupdate.concat(filterconcat));
    // setUserFavorites((prevUserFavorites) => {
    //   return prevUserFavorites
    //     .concat(temp_state)
    //     .filter((meetup) => meetup.email !== uid && meetup.status == "Pending");
    // });
  }

  function ApprovedCheckedHandler() {
    if (userFavorites) {
      console.log(userFavorites.length);
    }

    let userdetail = userFavorites.filter(
      (detail) =>
        detail.email === authenticatedUser && detail.status === "Approved"
    );
    console.log(userdetail);
    return userdetail;
  }

  function itemIsFavoriteHandler(uid) {
    console.log("allctx" + uid);
    // return userFavorites.some((meetup) => meetup.email === uid);
    return userFavorites.filter((meetup) => meetup.email === uid);
  }

  const context = {
    favorites: userFavorites,
    user: authenticatedUser,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    setUser: setUserHandler,
    removeFavorite: removeFavoriteHandler,
    setUserStatus: setUserStatusHandler,
    approvedChecked: ApprovedCheckedHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
