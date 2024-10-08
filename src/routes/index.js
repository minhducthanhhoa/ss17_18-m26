import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import Feedback from "@/views/Feedback.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserPage from "@/views/UserPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: "/",
        //     alias: ["/home", "/trang-chu"],
        //     component: import(/* webpackChunkName: "home" */"@/views/HomePage.vue"),
        //     name: "home",
        // },
        // {
        //     path: "/about",
        //     component: import(/* webpackChunkName: "about" */"@/views/AboutPage.vue"),
        //     name: "about",
            
        // },
        // {
        //     path: "/contact",
        //     component: import(/* webpackChunkName: "contact" */"@/views/ContactPage.vue"),
        //     name: "contact",
        //     redirect: "/feedback"
        // },
        // {
        //     path: "/feedback",
        //     component: import(/* webpackChunkName: "feedback" */"@/views/Feedback.vue"),
        //     name: "feedback"
        // },
        // {
        //     path: "/user/:id",
        //     component: import(/* webpackChunkName: "user" */"@/views/UserPage.vue"),
        //     name: "user",
        //     redirect: (to) => `/profile/${to.params.id}`
        // },
        // {
        //     path: "/profile/:id",
        //     component: import(/* webpackChunkName: "profile" */"@/views/ProfilePage.vue"),
        //     name: "profile"
        // },
        // {
        //     path: "/list-product",
        //     component: import(/* webpackChunkName: "listProduct" */"@/views/ListProduct.vue"),
        //     name: "ListProduct"
        // },
        // {
        //     path: "/admin",
        //     component: import(/* webpackChunkName: "admin" */"@/views/AdminIndex.vue"),
        //     name: "admin",
        //     beforeEnter: (to, from, next)=>{
        //         const isAuthentication = true;

        //         if (isAuthentication){
        //             // cho phép chuyển vào trang admin
        //             next();
        //         } else {
        //             next("/");
        //         }
        //     },
        //     children: [
        //         {
        //             path: "/manager-user",
        //             component: import(/* webpackChunkName: "ManagerUser" */"@/views/ManagerUser.vue"),
        //             name: "ManagerUser"
        //         },
        //         {
        //             path: "/manager-product",
        //             component: import(/* webpackChunkName: "ManagerProduct" */"@/views/ManagerProduct.vue"),
        //             name: "ManagerProduct"
        //         }
        //     ]
        // }
        {
            path: "/",
            component: import(/* webpackChunkName: "home" */"@/views/Baitap/bai1/Home.vue"),
            name: "home"
        },
        {
            path: "/about",
            component: import(/* webpackChunkName: "about" */"@/views/Baitap/bai1/About.vue"),
            name: "about"
        },
        {
            path: "/contact",
            component: import(/* webpackChunkName: "contact" */"@/views/Baitap/bai1/Contact.vue"),
            name: "contact",
            alias: ["/get-in-touch"]
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/search",
            component: import(/* webpackChunkName: "search" */"@/views/Baitap/bai3/Search.vue"),
            name: "search"
        },
        {
            path: "/:catchAll(.*)",
            component: import(/* webpackChunkName: "NotFound" */"@/views/Baitap/bai4/NotFound.vue"),
            name: "NotFound"
        },
        {
            path: "/login",
            component: import(/* webpackChunkName: "login" */"@/views/Baitap/bai5/Login.vue"),
            name: "login"
        },
        {
            path: "/dashboard",
            component: import(/* webpackChunkName: "dashboard" */"@/views/Baitap/bai5/Dashboard.vue"),
            name: "dashboard",
            beforeEnter: (to, from, next) => {
                if (isLoggedIn) {
                  next(); 
                } else {
                  next("/login"); 
                }
            }
        },
        {
            path: "/admin",
            component: import(/* webpackChunkName: "admin" */"@/views/Baitap/bai6/Admin.vue"),
            name: "admin",
            children: [
                {
                    path: "/manager-user",
                    component: import(/* webpackChunkName: "user" */"@/views/Baitap/bai6/Users.vue"),
                    name: "user",
                },
                {
                    path: "/manager-product",
                    component: import(/* webpackChunkName: "product" */"@/views/Baitap/bai6/Products.vue"),
                    name: "product",
                },
                {
                    path: "/settings",
                    component: import(/* webpackChunkName: "settings" */"@/views/Baitap/bai6/Settings.vue"),
                    name: "settings",
                }
            ]
        },
        {
            path: '/posts',
            component: import(/* webpackChunkName: "posts" */"@/views/Baitap/bai7/ListPost.vue"),
        },
        {
            path: '/posts/:id',
            component: import(/* webpackChunkName: "postdetail" */"@/views/Baitap/bai7/PostDetail.vue"),
            props: true,
        },
        {
            path: '*',
            component: import(/* webpackChunkName: "notfound" */"@/views/Baitap/bai7/PostNotFound.vue"),
        },
        {
            path: '/list-product',
            component: import(/* webpackChunkName: "listproduct" */"@/views/Baitap/bai8/ListProduct.vue"),
        },
        {
            path: '/product-detail/:id',
            component: import(/* webpackChunkName: "productdetail" */"@/views/Baitap/bai8/ProductDetail.vue"),
            props: true,
        }, 
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.path === from.path) {
          return savedPosition || { x: 0, y: 0 };
        }
    
        if (from.path === '/posts') {
          return { x: 0, y: window.innerHeight / 2 }; // Cuộn đến giữa PostDetail
        } else if (to.path.includes('/posts/') && to.path !== from.path) {
          return { x: 0, y: savedPosition ? savedPosition.y : 0 }; // Quay lại vị trí cũ
        } else if (to.path === '*' && from.path.includes('/posts/')) {
          return { x: 0, y: 0 }; // Cuộn về đầu trang cho PostNotFound
        }
      },
})
export default router;