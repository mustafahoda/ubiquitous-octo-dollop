import React from "react";

import EventItem from "./EventItem/EventItem";

import "./EventList.css";

const eventList = (props) => {
  const events = props.events.map((event) => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={event.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return (
    <ul className="event_list" userId={props.userId}>
      {events}
    </ul>
  );

  // return <h1>0HHIII</h1>;
};

export default eventList;
