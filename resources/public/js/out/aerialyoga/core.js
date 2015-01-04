// Compiled by ClojureScript 0.0-2371
goog.provide('aerialyoga.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
if(typeof aerialyoga.core.app_state !== 'undefined')
{} else
{aerialyoga.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
aerialyoga.core.page = (function page(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,aerialyoga.core.app_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),"FIXME"], null);
});
aerialyoga.core.main = (function main(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aerialyoga.core.page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map