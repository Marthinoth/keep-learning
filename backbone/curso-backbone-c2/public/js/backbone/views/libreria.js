var Libreria = Backbone.View.extend({

    el: ".vista",

    events: {
        'click .cambiar-color': 'cambiarColor'
    },

    cambiarColor: function () {
        this.$el.css('color', 'red');
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html('<div class="cambiar-color">Cambiar color del texto</div>');
    }
});