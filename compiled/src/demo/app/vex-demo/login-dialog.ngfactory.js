/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';
import * as i3 from '../../../../../src/demo/app/vex-demo/login-dialog';
import * as i4 from 'angular2-modal';
var styles_LoginDialog = [];
export var RenderType_LoginDialog = i0.ɵcrt({ encapsulation: 2, styles: styles_LoginDialog,
    data: {} });
function View_LoginDialog_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 8, 'div', [['class',
                'vex-dialog-input']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['class', 'vex-dialog-prompt-input'], ['name',
                'vex'], ['type', 'text']], [[8, 'placeholder', 0], [2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null,
                'input'], [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 3)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 3).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 3)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 3)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.context.defaultResult = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null),
        i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8, null],
            [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_8 = 'vex';
        var currVal_9 = _co.context.defaultResult;
        _ck(_v, 5, 0, currVal_8, currVal_9);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _co.context.placeholder, '');
        var currVal_1 = i0.ɵnov(_v, 7).ngClassUntouched;
        var currVal_2 = i0.ɵnov(_v, 7).ngClassTouched;
        var currVal_3 = i0.ɵnov(_v, 7).ngClassPristine;
        var currVal_4 = i0.ɵnov(_v, 7).ngClassDirty;
        var currVal_5 = i0.ɵnov(_v, 7).ngClassValid;
        var currVal_6 = i0.ɵnov(_v, 7).ngClassInvalid;
        var currVal_7 = i0.ɵnov(_v, 7).ngClassPending;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
export function View_LoginDialog_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class',
                'vex-dialog-message']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_LoginDialog_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.context.showInput;
        _ck(_v, 4, 0, currVal_1);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.context.message;
        _ck(_v, 1, 0, currVal_0);
    });
}
export function View_LoginDialog_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'login-dialog', [], null, null, null, View_LoginDialog_0, RenderType_LoginDialog)),
        i0.ɵdid(49152, null, 0, i3.LoginDialog, [i4.DialogRef], null, null)], null, null);
}
export var LoginDialogNgFactory = i0.ɵccf('login-dialog', i3.LoginDialog, View_LoginDialog_Host_0, {}, {}, []);
//# sourceMappingURL=login-dialog.ngfactory.js.map