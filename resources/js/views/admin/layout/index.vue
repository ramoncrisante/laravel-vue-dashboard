<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Start of Topbar -->
        <Topbar />
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->

  <!-- Logout Modal-->
</template>

<script>
import sbadmin2 from "../../../sb-admin-2.js";
import axios from "axios";
import { mapGetters } from "vuex";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

export default {
  name: "AdminLayout",
  components: {
    Topbar,
    Sidebar
  },
  mounted() {
    sbadmin2.init();
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
