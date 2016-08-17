import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    async addNew() {
      try {
        let user = await this.store.createRecord('user', {
          name: this.controller.get('name')
        });
        
        await user.save();
        this.controller.set('message', 'A new user with the name "' + this.controller.get('name') + '" was added!');
        this.controller.set('name', null);
        
      } catch (error) {
        this.controller.set('message', error);
      }
    }
  }  
});
