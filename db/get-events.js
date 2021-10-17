const db = require("./db");

const collectionPath = "events";

function Event(name, creationdDate, description, isPrivate, passcode, creatorId) {
    return {
        "name": name,
        "creationDate": creationdDate,
        "description": description,
        "isPrivate": isPrivate,
        "passcode": passcode,
        "creatorId": creatorId,
        "posts": []
    };
}

class EventsGetter {

    async getGlobalEvents() {
        var events = []
        const eventSnapshot = await db.collection(collectionPath).where("isPrivate", '==', false).get();

        console.log("events size:" + eventSnapshot.docs.length);
        if (eventSnapshot.docs.length >= 1) {
            const docs = eventSnapshot.docs;
            ;
            docs.forEach(element => {
                events.push(element.data());
            });
        }

        console.log("events are" + events);
        return events;
    }

    async newEvent(event) {
       
            if(event != null) {
                const newEvent = await db.collection(collectionPath).add(event)
                console.log("New ref" + newEvent.id)
            return event;
            }
    }


    async joinEvent( eventId, passcode) {
            const tempEvent =  await db.collection(collectionPath).where("eventId", '==', eventId).where("passcode", '==', passcode).get();
            if(tempEvent == null)  tempEvent =  await db.collection(collectionPath).where("eventId", '==', eventId).where("isPrivate", '==', false).get();

            if(tempEvent != null) return true;

            return false;
    }


    async getEvents(eventIds) {
        if(eventIds != null) {
            const eventsSnap = await db.collection(collectionPath).where('eventId', 'in', eventIds).get();

            if(eventsSnap.docs.length >=1) {
                return eventsSnap.docs;
            }
        }
    }


}



module.exports = {EventsGetter, Event};