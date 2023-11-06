var reset = new Boolean(true);

register("tick", () => {
    if (Player.getContainer().getName() == 'container') {
        reset = true
    }
    else if (Player.getContainer().getName() == 'Chest' && reset === true || Player.getContainer().getName() == 'Large Chest' && reset === true){
        ChatLib.chat('&4[&cLearn Dungeons&4] &aRemember to &bsneak&a click chests!')
        reset = false
    }
    
})
