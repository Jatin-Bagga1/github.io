"use strict";

(function(core)
{
    /**
     * This class is defined for volunteer events taking place.
     * It contains title, date, time, description, category, location.
     **/
    class Event {
        /**
         * Constructs a new Event instance
         * @param title
         * @param date
         * @param time
         * @param description
         * @param category
         * @param location
         */
        constructor(title = "", date = "", time = "", description = "", category = "", location = "") {
            this._title = title;
            this._date = date;
            this._time = time;
            this._description = description;
            this._category = category;
            this._location = location;
        }

        /**
         * Gets the title of the event
         * @returns {string}
         */
        get title() {
            return this._title;
        }

        /**
         * Gets the date of the event
         * @returns {string}
         */
        get date() {
            return this._date;
        }

        /**
         * Gets the time of the event
         * @returns {string}
         */
        get time() {
            return this._time;
        }

        /**
         * Gets the description of the event
         * @returns {string}
         */
        get description() {
            return this._description;
        }

        /**
         * Gets the category of the event
         * @returns {string}
         */
        get category() {
            return this._category;
        }

        /**
         * Gets the location of the event
         * @returns {string}
         */
        get location() {
            return this._location;
        }

        /**
         * Sets the title of the event
         * @param title
         */
        set title(title) {
            if (typeof title !== "string" || title.trim() === "") {
                throw new Error("Invalid title: must be a non-empty string");
            }
            this._title = title;
        }

        /**
         * Sets the date of the event
         * @param date
         */
        set date(date) {
            // Basic validation to ensure date is a non-empty string
            if (typeof date !== "string" || date.trim() === "") {
                throw new Error("Invalid date: must be a non-empty string");
            }
            this._date = date;
        }

        /**
         * Sets the time of the event
         * @param time
         */
        set time(time) {
            // Basic validation to ensure time is a non-empty string
            if (typeof time !== "string" || time.trim() === "") {
                throw new Error("Invalid time: must be a non-empty string");
            }
            this._time = time;
        }

        /**
         * Sets the description of the event
         * @param description
         */
        set description(description) {
            if (typeof description !== "string" || description.trim() === "") {
                throw new Error("Invalid description: must be a non-empty string");
            }
            this._description = description;
        }

        /**
         * Sets the category of the event
         * @param category
         */
        set category(category) {
            if (typeof category !== "string" || category.trim() === "") {
                throw new Error("Invalid category: must be a non-empty string");
            }
            this._category = category;
        }

        /**
         * Sets the location of the event
         * @param location
         */
        set location(location) {
            if (typeof location !== "string" || location.trim() === "") {
                throw new Error("Invalid location: must be a non-empty string");
            }
            this._location = location;
        }

        /**
         * Converts the event details into a human-readable string
         * @returns {string}
         */
        toString() {
            return `Title: ${this._title}\n
                Date: ${this._date}\n
                Time: ${this._time}\n
                Description: ${this._description}\n
                Category: ${this._category}\n
                Location: ${this._location}\n`;
        }

        /**
         * Serializes the event details into a string format suitable for storage
         * @returns {string|null}
         */
        serialize() {
            if (!this._title || !this._date || !this._time || !this._description || !this._category || !this._location) {
                console.error("One or more Event Properties are missing or invalid");
                return null;
            }
            return `${this._title},${this._date},${this._time},${this._description},${this._category},${this._location}`;
        }

        /**
         * Deserializes a (CSV) string of event details and updates the event properties
         * @param data
         */
        deserialize(data) {
            if (typeof data !== "string" || data.split(",").length !== 6) {
                console.error("Invalid data format for deserializing data");
                return;
            }

            const propArray = data.split(",");
            this._title = propArray[0];
            this._date = propArray[1];
            this._time = propArray[2];
            this._description = propArray[3];
            this._category = propArray[4];
            this._location = propArray[5];
        }

        /**
         * Converts the event details into JSON format
         * @returns {object}
         */
        toJSON() {
            return {
                title: this._title,
                date: this._date,
                time: this._time,
                description: this._description,
                category: this._category,
                location: this._location
            }
        }

        /**
         * Converts JSON data to event properties
         * @param data
         */
        fromJSON(data) {
            this._title = data.title;
            this._date = data.date;
            this._time = data.time;
            this._description = data.description;
            this._category = data.category;
            this._location = data.location;
        }
    }
    core.Event = Event;
})(core || (core = {}));