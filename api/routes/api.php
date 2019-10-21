<?php


Route::group(['middleware' => 'api','prefix' => 'auth'],function(){
    Route::post('login', 'Auth\LoginController');
    Route::get('me', 'Auth\MeController');
});
