import * as notificationItem from "../../notifications.json";


export default function getAllNotificationsByUser(userId) {
    return userId.filter((user) => userId == user.author.id).map((user) => user.context)
}