# nestjs-socketio-chat

Welcome to **`Nest.js Socket.io Chat`**! This project is a robust, open-source backend for building real-time chat applications. It's designed to handle everything from group discussions to private conversations on the server side, ensuring efficient and interactive communication experiences.

## Features

- **Authentication & Authorization**: Secure sign-in process using JWT.
- **Chat Rooms**: Create and manage group chats for community engagement.
- **Direct Messages**: Personal chat functionality for private conversations.
- **Real-Time Communication**: Instant message delivery powered by `Socket.io`.

## Technologies

**nestjs-socketio-chat** is crafted using powerful technologies:

- **[NestJS](https://nestjs.com/)**: A framework for building efficient server-side apps.
- **[Socket.io](https://socket.io/)**: Makes real-time communication possible.
- **[TypeORM](https://typeorm.io/)**: Helps us manage the database in an organized way.
- **[SQLite](https://www.sqlite.org/)**: Stores all the data without needing a complex setup.

## Getting Started

Follow these steps to set up **nestjs-socketio-chat** on your system:

1. **Clone the repository**: `git clone https://github.com/vontanne/nestjs-socketio-chat.git`
2. **Install Dependencies**: Navigate to the project directory and run `npm install`.
3. **Create Environment File**: Copy the `.env.example` file to `.env` and update the environment variables accordingly: `cp .env.example .env`
4. **Set up the Database**: Initialize your database with `npm run migration:run`.
5. **Launch the App**:
   - For development: `npm run start:dev`
   - For production: `npm run start:prod` (Note: Migrations run automatically in production mode.)

## Testing

Test the app's endpoints and chat features using tools like Postman, which supports `WebSocket` and `Socket.io` testing.

## Community & Contributions

Your contributions make our project thrive. Feel free to:

- **Report bugs**: [Submit a bug report](https://github.com/vontanne/nestjs-socketio-chat/issues/new?assignees=&labels=bug&template=bug_report.md)
- **Discuss improvements**: [Start a discussion](https://github.com/vontanne/nestjs-socketio-chat/discussions)
- **Submit fixes**: [Create a pull request](https://github.com/vontanne/nestjs-socketio-chat/compare)
- **Propose new features**: [Request a feature](https://github.com/vontanne/nestjs-socketio-chat/issues/new?assignees=&labels=enhancement&template=feature_request.md)

For more details on contributing, please review our [Contributing Guidelines](https://github.com/vontanne/nestjs-socketio-chat/blob/master/.github/CONTRIBUTING.md).


## License

**nestjs-socketio-chat** is open-sourced under the [GNU General Public License](./LICENSE).

---

Enjoy chatting with **nestjs-socketio-chat**!
