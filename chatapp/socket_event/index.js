export default (io, socket) => {
    // 入室メッセージをクライアントに送信する
    socket.on("enterEvent", (data) => {
        socket.broadcast.emit("enterEvent", data + "さんが入室しました。")
    })

    // 退室メッセージをクライアントに送信する
    socket.on("exitEvent", (data) => {
        socket.broadcast.emit("exitEvent", data + "さんが退室しました。")
    })

    // 投稿メッセージを送信する
    socket.on("publishEvent", (data) => {
        let message = data.userName + "さん：" + data.chatContent
        io.sockets.emit("publishEvent", message)
    })
}