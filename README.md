# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
import 'package:flutter/material.dart';
import 'package:meta/meta.dart';
---------------------------------------------------------
class CustomCheckBox extends StatefulWidget {
  const CustomCheckBox(this.icon, this.label,
      {Key key,
      @required this.onSelect,
      this.selectedBackgroundColor,
      this.notSelectedBackgroundColor,
      this.selectedTextColor,
      this.notSelectedTextColor,
      this.selectedIconColor,
      this.notSelectedIconColor,
      this.height,
      this.width})
      : super(key: key);

  final IconData icon;
  final String label;
  final ValueChanged<bool> onSelect;
  final Color selectedBackgroundColor;
  final Color selectedIconColor;
  final Color selectedTextColor;
  final Color notSelectedBackgroundColor;
  final Color notSelectedIconColor;
  final Color notSelectedTextColor;
  final double height;
  final double width;

  @override
  _CustomCheckBoxState createState() => _CustomCheckBoxState();
}

class _CustomCheckBoxState extends State<CustomCheckBox> {
  bool _selected = true;

  void _onTap() {
    setState(() {
      _selected = !_selected;
    });
    widget.onSelect(_selected);
  }

  @override
  Widget build(BuildContext context) {
    final ThemeData _theme = Theme.of(context);
    Color backgroundColor = _selected
        ? (widget.selectedBackgroundColor == null
            ? _theme.primaryColorDark
            : widget.selectedBackgroundColor)
        : (widget.notSelectedBackgroundColor == null
            ? _theme.primaryColorDark
            : widget.notSelectedBackgroundColor);
    Color textColor = _selected
        ? (widget.selectedTextColor == null
            ? Colors.white
            : widget.selectedTextColor)
        : (widget.notSelectedTextColor == null
            ? Colors.white
            : widget.notSelectedTextColor);
    Color iconColor = _selected
        ? (widget.selectedIconColor == null
            ? Colors.white
            : widget.selectedIconColor)
        : (widget.notSelectedIconColor == null
            ? Colors.white
            : widget.notSelectedIconColor);
    return Container(
      decoration: BoxDecoration(color: backgroundColor),
      width: widget.width == null ? 100 : widget.width,
      height: widget.height == null ? 100 : widget.height,
      child: Center(
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 16,
            ),
            IconButton(
              color: iconColor,
              onPressed: () {
                _onTap();
              },
              icon: Icon(widget.icon),
            ),
            SizedBox(
              height: 8,
            ),
            Expanded(
              child: Center(
                  child: Text(
                widget.label,
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 13, color: textColor),
              )),
            ),
            SizedBox(
              height: 8,
            )
          ],
        ),
      ),
    );
  }
}
