import React from "react";
import style from "./Noticias.module.css";

const Noticias = () => {
  return (
    <div id="Noticias">
      <h2 className={style.titulo} id="NoticiasInicio">
        Noticias
      </h2>
      <hr></hr>
      <div className={style.Noticias}>
        <div className={style.Noticias2}>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid02HgbbPFfmXvTQCM5nKn5XMSKVtHqwBZNQ16dnjPKo15HvNboojF3iPcwBAWtjH7Qkl&show_text=true&width=500"
            width={500}
            height={535}
            style={{ background: "white" }}
            frameborder="0"
            allowfullscreen="true"
            title="publicacion1"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className={style.Noticias2}>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid0Y7hC3vcSvJDX1uDHj6hy4Pj3V3YXKheZ7B83bk2n1zz4ZTrJexC4hVXAiiioaXmzl&show_text=true&width=500"
            width={500}
            height={535}
            style={{ background: "white" }}
            frameborder="0"
            allowfullscreen="true"
            title="publicacion2"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className={style.Noticias2}>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid02kXH5t5fJWmtYZ4RP5QfZp8KLzEJ7QoZPXfyny9d3x3gE2iTekQymaXgHuT4YhLbgl&show_text=true&width=500"
            width={500}
            height={535}
            style={{ background: "white" }}
            title="publicacion3"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className={style.Noticias2}>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbomberosvoluntarios.stacatalinaholmberg%2Fposts%2Fpfbid0GHTNs8SV2ffXyGxJE6QX9Zj5LdsKfv8SQ1Ho9auo9rYhRqzFRU4LfKpK6cTzNhJpl&show_text=true&width=500"
            width={500}
            height={535}
            style={{ background: "white" }}
            title="publicacion4"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
