/***
 * Excerpted from "Deliver Audacious Web Apps with Ember 2",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/mwjsember for more book information.
***/
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('contacts', function() {
    this.route('diary');
    this.route('messages');
    this.route('calls');
  });

  this.route('data', function() {
    this.route('public');
    this.route('private');
    this.route('website');
    this.route('blog');
    this.route('disk');
  });

  this.route('development', function() {
    this.route('howto');
  });

  this.route('apps', function() {
    this.route('login');
    this.route('register');
  });
});

export default Router;
