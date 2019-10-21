<template>
  <div>
      <Can I="post" a="comment">
      <div>
           <a href="">Post Comment</a>
      </div>
      </Can>
      <div>
          <p>This i a comment</p>
          <ul>
              <Can I="edit" a="comment">
              <li>
                  <a href="">Edit Comment</a>
              </li>
              </Can>
              <Can I="delete" a="comment">
              <li>
                  <a href="">Delete Comment</a>
              </li>
              </Can>
          </ul>
      </div>
  </div>
</template>

<script>


export default {

}
</script>

