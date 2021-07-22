<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-fill w-100">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav mt-2 mt-lg-0 ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Login <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>