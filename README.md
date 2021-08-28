
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/44405810/129751765-07802bb1-0e55-4311-b6ee-d90f9b2e237b.png" width="160px">


  <h1 align="center">🎉 Laravel 8, Vue.js & Bootstrap 4 SPA Dashboard 🎉</h1>

  <div align="center">
    <h2>An awesome SPA Admin Dashboard starter kit!</h2>
  </div>
</p>

<!-- PREVIEW -->
## PREVIEW
![laravel_vue_admin_dashboard_preview](https://user-images.githubusercontent.com/44405810/129740905-6cce06a4-05ca-4e73-b04f-4045c09eb4a3.gif)





<!-- ABOUT THE PROJECT -->
## About The Project


`laravel-vue-dashboard` is a Single Page Application (SPA) dashboard
built with [Laravel 8](https://laravel.com), [Vue.js](https://vuejs.org/) and [Bootstrap 4](https://getbootstrap.com) ([SB Admin Template](https://github.com/StartBootstrap/startbootstrap-sb-admin-2)). Thanks to the combination of the power of Laravel and the speed of Vue.js it is an excellent full-stack starter kit for enterprise applications.
 
 
It's a kit to start from scratch, not a Laravel package. It can help you to cut down your time by having an SPA dashboard with authentication system ready to use, taking advantage of [Laravel Passport](https://laravel.com/docs/8.x/passport) that uses the oauth2 authentication protocol.
 
The project provides sample pages, uses the routing system of Vue.js and Vuex for maintaining the application state.<br>
The code is structured in such a way to make it easy to modify and add new pages, components and APIs.


<!-- FEATURES -->
## FEATURES

* Sigle page application (SPA)
* Laravel 8
* [Vue.js](https://vuejs.org/) + VueRouter (configured with auth restricted pages) + Vuex 
* Login, register, email verification (optional) and resend, recovery password systems
* Ui with Bootstrap 4 and [SB Admin Template](https://github.com/StartBootstrap/startbootstrap-sb-admin-2)
* Sample views to get started
* Easy to add new pages and routes 
* Notification system


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

<ul>
    <li>Your machine needs to be ready for the latest Laravel and Node.js.</li>
</ul>

## Installation


   ```sh
    # Clone the project
    git clone https://github.com/ramoncrisante/laravel-vue-dashboard.git

    # Enter the project directory
    cd laravel-vue-dashboard

    # Copy env file and add your own database and mail credentials
    cp .env.example .env

    # Install dependency
    composer install

    # Generate app key
    php artisan key:generate
    
    # Migrate database
    php artisan migrate

    # Create encryption keys
    php artisan passport:install

    # Install dependency with NPM
    npm install

    # Develop
    npm run dev # or npm run watch

    # Build on production
    npm run production
    
    # Serving application
    php artisan serve

   ```

## Configuration

* Email verification is optional and it's disabled by default.
  To enable it, change the following parameter in the `.env` file
  
  `MUST_VERIFY_EMAIL=true`

* To use email verification and reset password functionality is required to set up the email service. 
  In order to successfully send emails, we need to provide `MAIL_DRIVER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` in the `.env` file.


## Built With

* [Laravel 8](https://laravel.com)
* [Vue.js](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Bootstrap 4](https://getbootstrap.com)
* [SB Admin Template](https://github.com/StartBootstrap/startbootstrap-sb-admin-2)
* [JQuery](https://jquery.com)
* [Axios](https://github.com/axios/axios)
* [Laravel Passport](https://laravel.com/docs/8.x/passport)
* [Font Awesome 5](https://fontawesome.com/)



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/ramoncrisante/laravel-vue-dashboard/blob/main/LICENSE.txt) for more information.
Basically, feel free to use and re-use any way you want.



<!-- CONTACT -->
## Contact

Ramon Crisante - ramon.crisante@yahoo.com

Project Link: [https://github.com/ramoncrisante/laravel-vue-dashboard](https://github.com/ramoncrisante/laravel-vue-dashboard)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ramoncrisante/laravel-vue-dashboard.svg?style=for-the-badge
[contributors-url]: https://github.com/ramoncrisante/laravel-vue-dashboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ramoncrisante/laravel-vue-dashboard.svg?style=for-the-badge
[forks-url]: https://github.com/ramoncrisante/laravel-vue-dashboard/network/members
[stars-shield]: https://img.shields.io/github/stars/ramoncrisante/laravel-vue-dashboard.svg?style=for-the-badge
[stars-url]: https://github.com/ramoncrisante/laravel-vue-dashboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/ramoncrisante/laravel-vue-dashboard.svg?style=for-the-badge
[issues-url]: https://github.com/ramoncrisante/laravel-vue-dashboard/issues
[license-shield]: https://img.shields.io/github/license/ramoncrisante/laravel-vue-dashboard.svg?style=for-the-badge
[license-url]: https://github.com/ramoncrisante/laravel-vue-dashboard/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ramoncrisante
