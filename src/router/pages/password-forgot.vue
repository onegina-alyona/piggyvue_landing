<script>
/**
 * Forgot password component
 */
export default {
    name: 'password-forgot'
}
</script>

<template>
  <div class="bg-account-pages py-4 py-sm-0">
    <div class="account-home-btn d-none d-sm-block">
      <a href="/" class="text-white">
        <i class="mdi mdi-home h1"></i>
      </a>
    </div>
    <section class="height-100vh">
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card account-card">
                  <div class="card-body">
                    <div class="text-center mt-3">
                      <h3 class="font-weight-bold">
                        <a class="navbar-brand logo text-uppercase" href="/" :style="{'background-image': 'url(' + require('@/assets/images/clients/piggyvue.png') + ')', 'background-size': 'contain','height': '48px', 'width': '140px', 'background-repeat': 'no-repeat', 'margin-top': '10px' }">
                        </a>
                      </h3>
                      <p class="text-muted">Reset Password</p>
                    </div>
                    <div class="p-3">
                      <div
                        class="alert alert-warning text-center"
                        role="alert"
                      >Enter your email address and we'll send you an email with instructions to reset your password.</div>
                      <form>
                        <div class="form-group">
                          <label for="email">Email</label>
                          <input
                            type="password"
                            class="form-control"
                            id="email"
                            placeholder="Enter Email"
                          />
                        </div>

                        <div class="mt-3">
                          <button type="submit" class="btn btn-custom btn-block">Reset your Password</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- end card -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </section>
    <!-- end account-pages  -->
  </div>
</template>