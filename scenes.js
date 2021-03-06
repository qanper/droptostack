function Win_scene(pixi) {
    let scene = new Container();

    let background = new Graphics()
        .beginFill(0x000000)
        .drawRect(0, 0, pixi.screen.width, pixi.screen.height)
        .endFill();

    scene.addChild(background);

    {
        let message = new Text("Stack dropped", DARK_STYLE_H1);
        message.position.set(pixi.screen.width/2 - 200, 50);
        scene.addChild(message);
    }

    {
        let message = new Text("press ENTER to continuE", DARK_STYLE_H2);
        message.position.set(pixi.screen.width/2 - 200, 150);
        scene.addChild(message);
    }

    let tip_message = new Text("", BLUE_STYLE_H2);
    tip_message.position.set(pixi.screen.width/2 - 200, 200);
    scene.addChild(tip_message);

    scene.update = () => {};

    scene.key_handler = (key, isPress) => {
        if(key === 13 && isPress === true) {
            select_scene(intro_scene);
        }
    };

    scene.select = (address) => {
        console.log("address message:", address);

        if(CHEATS[address]) {
            tip_message.text = CHEATS[address].success;
        }
    };

    return scene;
}

function Defeat_scene(pixi) {
    let scene = new Container();
    
    let background = new Graphics()
        .beginFill(0x000000)
        .drawRect(0, 0, pixi.screen.width, pixi.screen.height)
        .endFill();

    scene.addChild(background);

    {
        let message = new Text("You dropped", RED_STYLE_H1);
        message.position.set(pixi.screen.width/2 - 200, 50);
        scene.addChild(message);
    }

    {
        let message = new Text("press ENTER to restart", DARK_STYLE_H2);
        message.position.set(pixi.screen.width/2 - 200, 150);
        scene.addChild(message);
    }

    let tip_message = new Text("", BLUE_STYLE_H4);
    tip_message.position.set(pixi.screen.width/2 - 200, 300);
    scene.addChild(tip_message);

    scene.update = () => {};

    scene.key_handler = (key, isPress) => {
        if(key === 13 && isPress === true) {
            select_scene(intro_scene);
        }
    };

    scene.select = (address) => {
        console.log("address:", address);
        if(CHEATS[address]) {
            console.log("message:", CHEATS[address].fail);
            tip_message.text = CHEATS[address].fail;
        } else {
            tip_message.text = "DOnT try strange codes at h0me";
        }
    };

    return scene;
}