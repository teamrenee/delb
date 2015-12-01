"use strict";angular.module("App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ng-token-auth","angularModalService","ui.bootstrap","ui.bootstrap.collapse","naif.base64","ngFileUpload"]).run(["$rootScope","$location",function(a,b){a.$on("auth:login-success",function(a){console.log(a),b.path("/")})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/sellmyproduct",{templateUrl:"views/sellmyproduct.html",controller:"ItemAddCtrl"}).when("/signin",{templateUrl:"views/user_sessions/new.html",controller:"UserSessionsCtrl"}).when("/signup",{templateUrl:"views/user_registrations/new.html",controller:"UserRegistrationsCtrl"}).when("/groups",{templateUrl:"views/groups.html",controller:"GroupsCtrl",resolve:{auth:["$auth",function(a){return a.validateUser()}]}}).when("/shoppingcart",{templateUrl:"views/shoppingcart.html",controller:"CartCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl"}).when("/list/:product",{templateUrl:"partials/product.html",controller:"StoreCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductCtrl"}).when("/products/:id",{templateUrl:"views/partials/product.html",controller:"ProductListCtrl"}).when("/mystore",{templateUrl:"views/mystore.html",controller:"MystoreCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/favorites",{templateUrl:"views/favorites.html",controller:"FavoritesCtrl"}).when("/message",{templateUrl:"views/message.html",controller:"MessageCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).when("/history",{templateUrl:"views/history.html",controller:"HistoryCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/pleaselogin",{template:"<h3 class='container center mg-top-100 height-min600'>You must Log In or Sign Up to access the page.</h3>"}).when("/phones",{templateUrl:"views/partials/phone-list.html",controller:"PhoneListCtrl"}).when("/phones/:phoneId",{templateUrl:"views/partials/phone-detail.html",controller:"PhoneDetailCtrl"}).when("/items",{templateUrl:"views/partials/items.html",controller:"ItemListCtrl"}).when("/items/:id",{templateUrl:"views/partials/item-detail.html",controller:"ItemDetailCtrl"}).when("/item/new",{templateUrl:"views/partials/new.html",controller:"ItemAddCtrl"}).when("/items/:id",{templateUrl:"views/partials/item-detail.html",controller:"ItemDetailCtrl"}).when("/item/:id/edit",{templateUrl:"views/partials/edit.html",controller:"ItemUpdateCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("App").controller("MainCtrl",["$scope","ModalService","ListService","$rootScope",function(a,b,c,d){a.rotateBar=!0,a.loggedIn=!1,a.logo="images/delb.png",a.isCollapsed=!0,a.rotateUser=!0,a.rotateUserBar=!0,a.currentTabIndex=0,a.lists=[],a.selected=0,a.filters={},d.global={search:""},a.categories=[{title:"Item",icon:"glyphicon-th-large",id:1,link:"#/items"},{title:"Top Seller",icon:"glyphicon-thumbs-up",id:2,linke:"#/topseller"},{title:"Sale",icon:"glyphicon-tag",id:3,link:"#/sale"},{title:"New",icon:"glyphicon-star",id:4,link:"#/new"},{title:"Used",icon:"glyphicon-cog",id:5,link:"#/used"},{title:"Other",icon:"glyphicon-cog",id:6,link:"#/other"}],a.menuTabs=[{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"}],a.showLogin=function(){b.showModal({templateUrl:"login.html",controller:"UserSessionsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("!!!")})})},a.showSignUp=function(){b.showModal({templateUrl:"signup.html",controller:"UserRegistrationsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("registration modal")})})},a.subItems=[{title:"Design",detail:"innovation"},{title:"Entertainment",detail:"pleasure"},{title:"Living",detail:"happiness"},{title:"Balance",detail:"peace"}],a.showTab=function(b){a.currentTabIndex=b,a.selected=b},$("#offcanvasRight").on("hide.bs.offcanvas",function(){a.rotateUserBar=!0,a.rotateUser=!0,a.$apply()}),$("#offcanvasRight > ul > li > a").click(function(){$(".navmenu").offcanvas("hide")}),a.lists=[{title:"product 1 sjdfkasdfjaksdlfja djfjas dksjadlfkj",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg",subCategory:"featured",id:123},{title:"Product 1",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg",subCategory:"top seller",id:789},{title:"Product 2 jsakdfjskfjks jskdajlsdfj ajdfasd ",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"sale",id:678},{title:"product 1",price:23.22,description:"sdjfkljsdkal ajskdlfaj ajsdkfal a sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Oh_Hai129.jpg",subCategory:"new",id:456,id:67},{title:"product 2",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"new"},{title:"product 5",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg",subCategory:"new",id:345},{title:"product 6",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Oh_Hai129.jpg",subCategory:"new",id:7897},{title:"product 8",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"featured",id:96},{title:"product 8",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"featured",id:8758},{title:"product 8",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Oh_Hai129.jpg",subCategory:"featured",id:97}]}]),angular.module("App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("ListCtrl",["$http","$scope","ListService",function(a,b,c){b.heading="List",b.lists=[],b.successMsg="",b.errorMsg="",b.currentTabIndex=1,b.selectedCategory="Select Category",b.getList=function(){c.getListItems().success(function(a){b.lists=a}).error(function(){b.errorMsg="can't get the list"})},b.selectedCategory,b.dropdownCategorySelect=function(a){b.selectedCategory=a,b.category=a},b.addList=function(){c.postListItem(b.title,b.category,b.price,b.description).success(function(){b.successMsg="Uploaded successfully"}).error(function(){b.errorMsg="oops!"}),b.title="",b.category="",b.price="",b.description="",b.selectedCategory="Select a category",b.getList()},b.deleteList=function(c){a["delete"]("/api/v1/list/"+c).success(function(){console.log("success")}).error(function(){console.log("fail")}),b.getList()},b.showTab=function(a){b.currentTabIndex=a},b.items=["Accessories","Arts & Craft","Bags","Beauty","Clothing","Craft","Electronics","Home","Jewerly","Kids","Party","Pets","Shoes","Toys","Weddings"],b.getList()}]),angular.module("App").controller("ItemListCtrl",["$scope","Items",function(a,b){a.items=b.query(),a.orderProp="age"}]).controller("ItemDetailCtrl",["$scope","$routeParams","Item",function(a,b,c){console.log(b.id),a.loaderSource="images/default.gif",a.loading=!0,c.getItem({id:b.id}).success(function(c){angular.forEach(c,function(c){c.id==b.id&&(a.item=c)})}).error(function(){a.errorMsg="Oops, there's no item"})["finally"](function(){a.loading=!1}),a.setImage=function(b){a.mainImageUrl=b}}]).controller("ItemAddCtrl",["$scope","$location","Item","$rootScope","Upload",function(a,b,c,d,e){a.submit=function(){a.upload(a.image)},a.upload=function(b){a.item.user_id=d.user.id,e.upload({url:"/api/v1/item",data:{image:b,user_id:a.item.user_id,title:a.item.title,price:a.item.price,description:a.item.description,availability:a.item.availability,quantity:a.item.quantity}}).success(function(){console.log("success")}).error(function(){console.log("error")})},a.item=""}]).controller("ItemUpdateCtrl",["$scope","$resource","Item","$location","$routeParams",function(a,b,c,d,e){a.item=User.get({id:e.id}),a.update=function(){a.itemForm.$valid&&c.update(a.item,function(){d.path("/")},function(a){console.log(a)})}}]),angular.module("App").controller("FormCtrl",["$scope",function(a){a.areaCode=["3000","3001","3002"]}]),angular.module("App").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("GroupsCtrl",["$scope",function(a){a.groups=["Group 1","Group 2","Group 3"]}]),angular.module("App").controller("CarouselCtrl",["$scope",function(a){a.myInterval=9e3,a.noWrapSlides=!1;var b=a.slides=[{image:"http://i.imgur.com/rrDG6B5.png"},{image:"http://i.imgur.com/UfVQ26j.png"},{image:"http://i.imgur.com/Sc9vyP2.png"}];a.addSlide=function(){var a=600+b.length+1;b.push({image:"//placekitten.com/"+a+"/300",text:["More","Extra","Lots of","Surplus"][b.length%4]+" "+["Cats","Kittys","Felines","Cutes"][b.length%4]})};for(var c=0;0>c;c++)a.addSlide()}]),angular.module("App").controller("FavoritesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("CartCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("MystoreCtrl",["$scope","$rootScope","$timeout","Item","$http",function(a,b,c,d,e){console.log(b.user.name),null===b.user.name?a.user=b.user.email:null!==b.user.name?a.user=b.user.name:a.name="Your Store",a.getLists=function(){a.loading=!0,d.getItems().success(function(c){for(var d=[],e=0;e<c.length;e++)c[e].user_id==b.user.id&&d.push(c[e]);a.items=d}).error(function(){a.errorMsg="Sorry. You haven't added any products to sell."})["finally"](function(){a.loading=!1})},a.deleteItem=function(b){e["delete"]("/api/v1/item/"+b).success(function(){console.log("deleted")}).error(function(){console.log("could not delete")}),a.getLists()},a.getLists()}]),angular.module("App").controller("MessageCtrl",["$scope","$rootScope",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],console.log(b),a.user=b.user,a.name=b.user.name,a.email=b.user.email}]),angular.module("App").controller("HistoryCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("AccountCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("UserSessionsCtrl",["$scope",function(a){a.$on("auth:login-error",function(b,c){a.error="something wrong"})}]),angular.module("App").controller("UserRegistrationsCtrl",["$scope","$location","$auth",function(a,b,c){a.$on("auth:registration-email-error",function(b,c){a.error=c.errors[0]}),a.handleRegBtnClick=function(){c.submitRegistration(a.registrationForm).then(function(){c.submitLogin({email:a.registrationForm.email,password:a.registrationForm.password})})}}]),angular.module("App").factory("ListService",["$http",function(a){var b={GetListItems:"/api/v1/list.json",PostListItem:"/api/v1/list"};return{getListItems:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetListItems)},getListItem:function(c){return c=c||{},a.get(b.GetListItems,{params:{id:id}})},postListItem:function(c,d,e,f){return a.post(b.PostListItem,{title:c,category:d,price:e,description:f})}}}]),angular.module("App").factory("Phone",["$resource",function(a){return a("scripts/phones/:phoneId.json",{},{query:{method:"GET",params:{phoneId:"phones"},isArray:!0}})}]),angular.module("App").factory("Items",["$resource",function(a){return a("/api/v1/item.json",{},{query:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("App").factory("Item",["$http",function(a){var b={GetItems:"/api/v1/item.json",GetItem:"/api/v1/item/",PostItem:"/api/v1/item"};return{getItems:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetItems)},getItem:function(c){return a.get(b.GetItem,{params:{id:c},withCredentials:!0,timeout:8e4})},postItem:function(c,d,e,f,g){return a.post(b.PostItem,{user_id:c,title:d,image:e,description:f,price:g})}}}]),angular.module("App").directive("loading",["$http",function(a){return{restrict:"A",link:function(b,c,d){b.isLoading=function(){return a.pendingRequests.length>0},b.$watch(b.isLoading,function(a){a?c.removeClass("ng-hide"):c.addClass("ng-hide")})}}}]),angular.module("App").filter("checkmark",function(){return function(a){return a?"✓":"✘"}}),angular.module("App").animation(".phone",function(){var a=function(a,b,c){return"active"==b?(a.css({position:"absolute",top:500,left:0,display:"block"}),jQuery(a).animate({top:0},c),function(b){b&&a.stop()}):void 0},b=function(a,b,c){return"active"==b?(a.css({position:"absolute",left:0,top:0}),jQuery(a).animate({top:-500},c),function(b){b&&a.stop()}):void 0};return{addClass:a,removeClass:b}}),angular.module("App").controller("ProductCtrl",["$scope","$routeParams",function(a,b){a.id=b.id}]).controller("PhoneListCtrl",["$scope","Phone",function(a,b){a.phones=b.query(),a.orderProp="age"}]).controller("PhoneDetailCtrl",["$scope","$routeParams","Phone",function(a,b,c){a.phone=c.get({phoneId:b.phoneId},function(b){a.mainImageUrl=b.images[0]}),a.setImage=function(b){a.mainImageUrl=b}}]);