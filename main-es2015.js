(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<!-- Toolbar -->\r\n<div class=\"container my-3 wrap \">\r\n\r\n <router-outlet></router-outlet>\r\n\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/detalle-categoria/detalle-categoria.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/detalle-categoria/detalle-categoria.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalCategoriaService.modal\">\r\n  <div  style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">{{titulo}}</h5>\r\n          <button (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <ul *ngIf=\"categoria\"  class=\"list-group text-dark mb-3\">\r\n                  <li class=\"list-group-item active\">{{categoria.codigo}}</li>\r\n                  <li class=\"list-group-item \">{{categoria.nombre}}</li>\r\n                  <li class=\"list-group-item\">{{categoria.descripcion}}</li>\r\n                  <li class=\"list-group-item\">{{categoria.createAt | date:\"fullDate\"}}</li>\r\n\r\n                </ul>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/formularios/form-categorias.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/formularios/form-categorias.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"alert alert-danger\" *ngIf=\"errores?.length>0\" >\r\n    <li  *ngFor=\"let err of errores\" >\r\n      {{err}}\r\n    </li>\r\n</ul>\r\n<div class=\"card bg-dark text-white\">\r\n    <div class=\"card-header\">\r\n      {{titulo}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form #categoriaForm=\"ngForm\">\r\n          <div class=\"form-group row\">\r\n              <label for=\"codigo\" class=\"col-form-label col-sm-2\">Codigo </label>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                        [(ngModel)]=\"categoria.codigo\"\r\n                        name=\"codigo\"\r\n                        minlength=\"4\"\r\n                    maxlength=\"4\"\r\n                    #codigo=\"ngModel\"\r\n                    requiered>\r\n                    <div *ngIf=\"codigo.invalid && (codigo.dirty || codigo.touched)\"\r\n                    class=\"alert alert-danger\">\r\n                        <div class=\"\" *ngIf=\"codigo?.errors?.required\" >\r\n                          Codigo es Requerido\r\n                        </div>\r\n                        <div class=\"\" *ngIf=\"codigo?.errors?.minlength\" >\r\n                          Codigo debe contener minimo 4 caracteres\r\n                        </div>\r\n                        <div class=\"\" *ngIf=\"codigo?.errors?.maxlength\" >\r\n                          Codigo debe contener maximo 4 caracteres\r\n                        </div>\r\n                    </div>\r\n              </div>\r\n            </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"nombre\" class=\"col-form-label col-sm-2\">Nombre </label>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\"\r\n                    [(ngModel)]=\"categoria.nombre\"\r\n                    name=\"nombre\"\r\n                    minlength=\"3\"\r\n                maxlength=\"50\"\r\n                #nombre=\"ngModel\"\r\n                requiered>\r\n                <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\"\r\n                class=\"alert alert-danger\">\r\n                    <div class=\"\" *ngIf=\"nombre?.errors?.required\" >\r\n                      Nombre es Requerido\r\n                    </div>\r\n                    <div class=\"\" *ngIf=\"nombre?.errors?.minlength\" >\r\n                      Nombre debe contener minimo 3 caracteres\r\n                    </div>\r\n                    <div class=\"\" *ngIf=\"nombre?.errors?.maxlength\" >\r\n                      Nombre debe contener maximo 50 caracteres\r\n                    </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"descripcion\" class=\"col-form-label col-sm-2\">Descripcion </label>\r\n          <div class=\"col-sm-6\">\r\n            <textarea class=\"form-control\"\r\n                      [(ngModel)]=\"categoria.descripcion\"\r\n                      name=\"descripcion\"\r\n                      >\r\n            </textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <button class=\"btn btn-primary\"\r\n                        role=\"button\"\r\n                        (click)=\"create()\"\r\n                        *ngIf=\"!categoria.id else elseBlock\"\r\n                        [disabled]=\"!categoriaForm.form.valid\">\r\n                  Crear\r\n                </button>\r\n                <ng-template #elseBlock>\r\n                    <button class=\"btn btn-primary\"\r\n                        role=\"button\"\r\n                        (click)=\"update()\"\r\n                        [disabled]=\"!categoriaForm.form.valid\">\r\n                  Actualizar\r\n                </button>\r\n                </ng-template>\r\n\r\n              </div>\r\n            </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/listado-regiones/categorias.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/listado-regiones/categorias.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-detalle-categoria\r\n      *ngIf=\"categoriaSelecionado\"\r\n      [categoria]=\"categoriaSelecionado\"></app-detalle-categoria>\r\n<div class=\"card bg-light mb-3\">\r\n  <div class=\"card-header\"><h3><strong>Categorias</strong></h3></div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado de Categorias</h4>\r\n    <div class=\"my-2 text-left\">\r\n        <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                class=\"btn btn-rounded btn-outline-primary\"\r\n                type=\"button\"\r\n                 [routerLink]=\"['/categorias/form']\"\r\n        >\r\n          Crear Categorias\r\n        </button>\r\n      </div>\r\n      <div class=\"alert alert-info\"\r\n        *ngIf=\"categorias?.length == 0\" >\r\n        <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n    </div>\r\n    <table class='table table-bordered table-striped'\r\n                    *ngIf=\"categorias?.length>0\" >\r\n      <thead class=\"bg-dark text-center text-white\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Codigo</th>\r\n          <th>Nombre</th>\r\n          <th>Descripcion</th>\r\n          <th>Fecha</th>\r\n          <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Editar</th>\r\n          <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let categoria of categorias\" >\r\n          <td (click)=\"abrirModal(categoria)\"\r\n             style=\"width: 64px; cursor: pointer;\" >\r\n             {{categoria.id }}\r\n          </td>\r\n          <td>{{categoria.codigo }}</td>\r\n          <td>{{categoria.nombre | uppercase}}</td>\r\n            <td>{{categoria.descripcion}}</td>\r\n                    <td>{{categoria.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n                    <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                        <button type=\"button\"\r\n                            class=\"btn btn-outline-success\"\r\n                            [routerLink]=\"['/categorias/form', categoria.id]\"\r\n                            >\r\n                          Editar\r\n                        </button>\r\n                      </td>\r\n                      <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                          <button type=\"button\"\r\n                              class=\"btn btn-outline-danger\"\r\n                              (click)=\"delete(categoria)\"\r\n                              >\r\n                            Eliminar\r\n                          </button>\r\n                      </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n          [paginador]=\"paginador\"\r\n          [link]=\"link\">\r\n    </app-paginador>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/detalle-cliente/detalle-cliente.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/detalle-cliente/detalle-cliente.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<div class=\"container\"  *ngIf=\"cliente\">\r\n    <a [routerLink]=\"['/clientes']\"\r\n              class=\"btn btn-outline-warning btn-xs my-2\">&laquo;\r\n              Regresar\r\n    </a>\r\n    <button\r\n            type=\"button\"\r\n            class=\"btn btn-outline-secondary btn-xs my-2 mx-3\"\r\n            [routerLink]=\"['/clientes/form', cliente.id]\"\r\n    >\r\n      Editar\r\n    </button>\r\n    <button type=\"button\"\r\n              class=\"btn btn-outline-success btn-xs\"\r\n              [routerLink]=\"['/facturas/form', cliente.id]\"\r\n              >\r\n              Crear Factura\r\n      </button>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <ul *ngIf=\"cliente\"  class=\"list-group text-dark mb-3\">\r\n        <li class=\"list-group-item bg-dark text-white-50\">\r\n          <h4>\r\n            <strong>\r\n              Detalles Cliente.\r\n            </strong>\r\n          </h4>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Nombre: </strong>\r\n          {{cliente.nombre | uppercase}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Apellido: </strong>\r\n          {{cliente.apellido | uppercase}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Barrio: </strong>\r\n          {{cliente.region.nombre | uppercase}}\r\n        </li>\r\n        <li *ngIf=\"cliente.direccion\"\r\n          class=\"list-group-item\">\r\n          <strong>Direccion: </strong>\r\n          {{cliente.direccion | uppercase}}\r\n        </li>\r\n        <li *ngIf=\"cliente.celular1\"\r\n        class=\"list-group-item\">\r\n        <strong>Celular 1: </strong>\r\n        {{cliente.celular1}}\r\n        </li>\r\n        <li *ngIf=\"cliente.celular2\"\r\n        class=\"list-group-item\">\r\n        <strong>Celular 2: </strong>\r\n        {{cliente.celular2}}\r\n        </li>\r\n        <li *ngIf=\"cliente.telefono\"\r\n          class=\"list-group-item\">\r\n          <strong>Telefono: </strong>\r\n          {{cliente.telefono}}\r\n        </li>\r\n        <li *ngIf=\"cliente.email\"\r\n          class=\"list-group-item\">\r\n          <strong>Email: </strong>\r\n          {{cliente.email | uppercase}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Fec. Nacimiento: </strong>\r\n          {{cliente.fecha | date:\"fullDate\"}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Fec. Creacion: </strong>\r\n          {{cliente.createAt | date:\"fullDate\"}}\r\n        </li>\r\n      </ul>\r\n        <div class=\"input-group mb-3\">\r\n            <div class=\"custom-file\">\r\n              <input (change)=\"seleccionarFoto($event)\"\r\n                    type=\"file\" class=\"custom-file-input\"\r\n                    style=\"cursor: pointer;\"\r\n                    id=\"inputGroupFile04\" aria-describedby=\"inputGroupFileAddon04\">\r\n              <label style=\"cursor: pointer;\"\r\n                    class=\"custom-file-label\"\r\n                    for=\"inputGroupFile04\">{{rutaFoto}}</label>\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n              <button (click)=\"subirFoto()\"\r\n                [disabled]=\"!fotoSelecionada\"\r\n                class=\"btn btn-outline-secondary\"\r\n                type=\"button\" id=\"inputGroupFileAddon04\">Subir</button>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"progreso>0 \"  class=\"progress my-2\" style=\"height: 40px;\">\r\n              <div class=\"progress-bar progress-bar-striped\"\r\n                  role=\"progressbar\"\r\n                  [ngStyle]= \"{width: progreso+'%'}\"\r\n                  attr.aria-valuenow=\"{{progreso}}\" aria-valuemin=\"0\"\r\n                  aria-valuemax=\"100\">\r\n                  {{progreso}}%\r\n              </div>\r\n          </div>\r\n\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img *ngIf=\"cliente?.foto\"  src=\"http://localhost:8080/api/uploads/imgcliente/{{cliente.foto}}\"\r\n          alt=\"{{cliente.foto}}\" class=\"img-thumbnail rounded\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n      <button type=\"button\"\r\n              class=\"btn btn-outline-success btn-xs\"\r\n              [routerLink]=\"['/facturas/form', cliente.id]\"\r\n              >\r\n              Crear Factura\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"alert alert-info my-4\" *ngIf=\"cliente.facturas.length == 0\">\r\n        No hay Facturas asignadas para el Cliente:\r\n        <strong> {{cliente.nombre}} {{cliente.apellido}} </strong>\r\n      </div>\r\n\r\n      <table class=\"table table-bordered text-center table-striped my-4\"\r\n                    *ngIf=\"cliente.facturas.length > 0\">\r\n        <thead class=\"bg-dark  text-white\">\r\n          <tr>\r\n            <th>Folio</th>\r\n            <th>Descripción</th>\r\n            <th>Fecha</th>\r\n            <th >Total</th>\r\n            <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                >Ganancia</th>\r\n            <th >Detalle</th>\r\n            <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">eliminar</th> -->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let factura of cliente.facturas\">\r\n            <td>{{factura.id}}</td>\r\n            <td>{{factura.descripcion | uppercase}}</td>\r\n            <td>{{factura.createAt | date:\"fullDate\"}}</td>\r\n            <td class=\"text-right\">{{formatNumber(factura.total)}}</td>\r\n            <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                class=\"text-right\">{{formatNumber(factura.totalGanancia)}}</td>\r\n            <td class=\"text-center\"><button class=\"btn btn-primary btn-sm\" type=\"button\"\r\n              [routerLink]=\"['/facturas', factura.id]\">ver</button>\r\n            </td>\r\n\r\n            <!-- <td>\r\n              <button (click)=\"delete(factura)\"\r\n                    class=\"btn btn-danger btn-sm\" type=\"button\" >\r\n              eliminar\r\n              </button>\r\n            </td> -->\r\n\r\n          </tr>\r\n        </tbody>\r\n        <a [routerLink]=\"['/clientes']\"\r\n            class=\"btn btn-outline-warning btn-xs my-3\">\r\n            &laquo; Regresar</a>\r\n      </table>\r\n\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/formularios/form-cliente.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/formularios/form-cliente.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<mat-card class=\"bg-light\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <strong>\r\n          {{titulo}}\r\n        </strong>\r\n      </mat-card-title>\r\n      <mat-icon matSuffix>perm_identity</mat-icon>\r\n    </mat-card-header>\r\n<mat-card-content class=\"bg-light\">\r\n  <mat-card-subtitle>\r\n    <span class=\"my-1\">\r\n      Los campos con (*) son requeridos.\r\n    </span>\r\n    <mat-card *ngIf=\"errores?.length>0\">\r\n      <mat-card-content>\r\n        <ul class=\"alert alert-danger\"  >\r\n          <li  *ngFor=\"let err of errores\" >\r\n            {{err}}\r\n          </li>\r\n        </ul>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-card-subtitle>\r\n  <form [formGroup]=\"formularioCreado\" >\r\n    <div class=\"row\">\r\n      <!-- Columna izquierda -->\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\r\n              <mat-label for=\"nombre\">\r\n                Nombre\r\n              </mat-label>\r\n              <input style=\"text-transform: uppercase;\"\r\n                  matInput required\r\n                  formControlName=\"nombre\"\r\n                  placeholder=\"Ej: juan pepito \">\r\n              <mat-icon matSuffix>create</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['nombre'].invalid &&\r\n                                (formularioCreado.controls['nombre'].dirty\r\n                                || formularioCreado.controls['nombre'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['nombre'].errors.required\"\r\n                               role=\"alert\">\r\n                          Nombre es requerido\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['nombre'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 3 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['nombre'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 20 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"documento\">\r\n                Documento de identidad\r\n              </mat-label>\r\n              <input  matInput required\r\n                  formControlName=\"documento\"\r\n                  placeholder=\"ej: 1234569870\">\r\n             <mat-icon matSuffix>perm_identity</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['documento'].invalid &&\r\n                                (formularioCreado.controls['documento'].dirty\r\n                                || formularioCreado.controls['documento'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['documento'].errors.required\"\r\n                               role=\"alert\">\r\n                               Documento es requerido\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['documento'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 8 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['documento'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 10 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"celular1\">\r\n                Celular Principal\r\n              </mat-label>\r\n              <input matInput required\r\n                  formControlName=\"celular1\"\r\n                  placeholder=\"Ej: 321123456\">\r\n              <mat-icon matSuffix> stay_primary_portrait</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['celular1'].invalid &&\r\n                                (formularioCreado.controls['celular1'].dirty\r\n                                || formularioCreado.controls['celular1'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['celular1'].errors.required\"\r\n                               role=\"alert\">\r\n                               Celular Principal es requerido\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['celular1'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 10 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['celular1'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 10 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"telefono\">\r\n                Telefono Fijo\r\n              </mat-label>\r\n              <input\r\n                  matInput\r\n                  formControlName=\"telefono\"\r\n                  placeholder=\"ej: 5777777\">\r\n              <mat-icon matSuffix>phone</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['telefono'].invalid &&\r\n                                (formularioCreado.controls['telefono'].dirty\r\n                                || formularioCreado.controls['telefono'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['telefono'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 7 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['telefono'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 7 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\" >\r\n              <mat-label for=\"fecha\">\r\n                Fecha Nacimiento\r\n              </mat-label>\r\n            <input matInput required\r\n                [matDatepicker]=\"fecha\"\r\n                [min]=\"minDate\"\r\n                [max]=\"maxDate\"\r\n                formControlName=\"fecha\"\r\n                placeholder=\"ej: 18/2/2050\"\r\n               >\r\n               <mat-datepicker-toggle\r\n                matSuffix [for]=\"fecha\">\r\n                </mat-datepicker-toggle>\r\n                <mat-datepicker  #fecha></mat-datepicker>\r\n              </mat-form-field>\r\n                  <mat-error *ngIf=\"formularioCreado.controls['fecha'].invalid &&\r\n                              (formularioCreado.controls['fecha'].dirty\r\n                              || formularioCreado.controls['fecha'].touched )\">\r\n                    <mat-error *ngIf=\"formularioCreado.controls['fecha'].errors.required\"\r\n                        role=\"alert\">\r\n                        Fch. Nacimiento es requerida\r\n                    </mat-error>\r\n                  </mat-error>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- columna derecha -->\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"apellido\">\r\n                Apellido\r\n              </mat-label>\r\n              <input style=\"text-transform: uppercase;\"\r\n                  matInput required\r\n                  formControlName=\"apellido\"\r\n                  placeholder=\"ej: doe smitch\">\r\n              <mat-icon matSuffix>create</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['apellido'].invalid &&\r\n                                (formularioCreado.controls['apellido'].dirty\r\n                                || formularioCreado.controls['apellido'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['apellido'].errors.required\"\r\n                               role=\"alert\">\r\n                               Apellido es requerido\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['apellido'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 3 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['apellido'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 20 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"email\">\r\n                Email\r\n              </mat-label>\r\n              <input style=\"text-transform: uppercase;\"\r\n                  matInput required\r\n                  formControlName=\"email\"\r\n                  placeholder=\"ej: sucorreo@gmail.com \">\r\n              <mat-icon matSuffix> email</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['email'].invalid &&\r\n                                (formularioCreado.controls['email'].dirty\r\n                                || formularioCreado.controls['email'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['email'].errors.required\"\r\n                               role=\"alert\">\r\n                               Email es requerido\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['email'].errors.email\"\r\n                               role=\"alert\" >\r\n                               Formato de 'Email' no valido\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"celular2\">\r\n                Celular Secundario\r\n              </mat-label>\r\n              <input matInput\r\n                  formControlName=\"celular2\"\r\n                  placeholder=\"Digete celular Secundario\">\r\n              <mat-icon matSuffix> stay_primary_portrait</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['celular2'].invalid &&\r\n                                (formularioCreado.controls['celular2'].dirty\r\n                                || formularioCreado.controls['celular2'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['celular2'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 10 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['celular2'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 10 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"direccion\">\r\n                Direccion\r\n              </mat-label>\r\n              <input style=\"text-transform: uppercase;\"\r\n                  matInput required\r\n                  formControlName=\"direccion\"\r\n                  placeholder=\"ej: calle-4 av-102 # 1-02\">\r\n                  <mat-icon matSuffix>home</mat-icon>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['direccion'].invalid &&\r\n                                (formularioCreado.controls['direccion'].dirty\r\n                                || formularioCreado.controls['direccion'].touched )\">\r\n                        <mat-error *ngIf=\"formularioCreado.controls['direccion'].errors.required\"\r\n                               role=\"alert\">\r\n                               Direccion es requerido\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['direccion'].errors.minlength\"\r\n                               role=\"alert\" >\r\n                             *Minimo 3 caracteres*\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"formularioCreado.controls['direccion'].errors.maxlength\"\r\n                               role=\"alert\" >\r\n                             *Maximo 50 caracteres*\r\n                        </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-8\">\r\n            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"  >\r\n              <mat-label for=\"direccion\">\r\n                Barrio\r\n              </mat-label>\r\n            <mat-select required\r\n                      [compareWith]=\"compararRegion\"\r\n                      formControlName=\"region\"\r\n                      name=\"region\"\r\n                      style=\"width: 330px;\">\r\n                      <mat-option\r\n                        *ngFor=\"let region of regiones\"\r\n                        [value]=\"region\"\r\n                      >\r\n                        {{region.nombre | uppercase}}\r\n                      </mat-option >\r\n            </mat-select>\r\n            <mat-icon matSuffix> location_on</mat-icon>\r\n          </mat-form-field>\r\n            <mat-error *ngIf=\"formularioCreado.controls['region'].invalid &&\r\n                              (formularioCreado.controls['region'].dirty\r\n                              || formularioCreado.controls['region'].touched )\">\r\n                    <mat-error *ngIf=\"formularioCreado.controls['region'].errors.required\"\r\n                        role=\"alert\">\r\n                        Barrio es requerido\r\n                    </mat-error>\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-card-footer class=\"bg-light ml-4\">\r\n      <button class=\"btn btn-rounded btn-primary btn-xs my-3  \"\r\n                role=\"button\"\r\n                (click)=\"create()\"\r\n                [disabled]=\"!formularioCreado.valid\"\r\n                *ngIf=\"!cliente.id else elseBlock\">\r\n          Crear\r\n        </button>\r\n        <ng-template #elseBlock>\r\n            <button class=\"btn btn-rounded btn-success btn-xs my-3 \"\r\n                role=\"button\"\r\n                [disabled]=\"!formularioCreado.valid\"\r\n                (click)=\"update()\">\r\n          Actualizar\r\n        </button>\r\n        </ng-template>\r\n    </mat-card-footer>\r\n  </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/lista-clientes/clientes.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/lista-clientes/clientes.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<app-cliente-facturar></app-cliente-facturar>\r\n<div class=\"card  mb-3\">\r\n  <div class=\"card-header bg-dark text-muted\"><h3><strong>{{titulo}}</strong></h3></div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado de Clientes</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <div class=\"my-2 text-left\">\r\n          <button class=\"btn btn-rounded btn-outline-primary btn-xs\"\r\n          type=\"button\"\r\n          (click)=\"abrirModal()\"\r\n          >\r\n            Buscar Cliente\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"my-2 text-left\">\r\n          <button\r\n                  class=\"btn btn-rounded btn-outline-info btn-xs\"\r\n                  type=\"button\"\r\n                   [routerLink]=\"['/clientes/form']\"\r\n          >\r\n            Crear Cliente\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"alert alert-info\"\r\n        *ngIf=\"clientes?.length == 0\" >\r\n        <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n    </div>\r\n    <table class='table table-bordered table-striped'\r\n                  *ngIf=\"clientes?.length>0\" >\r\n      <thead class=\"bg-dark text-center text-muted\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Documento</th>\r\n          <th>Nombre</th>\r\n          <th>Apellido</th>\r\n          <th>Celular</th>\r\n          <th>Facturar</th>\r\n          <th>Editar</th>\r\n          <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let cliente of clientes\" >\r\n          <td>\r\n              <img *ngIf=\"cliente?.foto\"  [routerLink]=\"['/clientes/details', cliente.id]\"\r\n                  src=\"http://localhost:8080/api/uploads/imgcliente/{{cliente.foto}}\"\r\n              alt=\"{{cliente.foto}}\" class=\"img-thumbnail rounded\"\r\n              style=\"width: 64px; cursor: pointer;\">\r\n              <img *ngIf=\"!cliente?.foto\"  [routerLink]=\"['/clientes/details', cliente.id]\"\r\n                  src=\"http://localhost:8080/images/no-usuario.png\"\r\n              alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n              style=\"width: 64px; cursor: pointer;\">\r\n          </td>\r\n            <td>{{cliente.documento}}</td>\r\n              <td>{{cliente.nombre | uppercase}}</td>\r\n                <td>{{cliente.apellido | uppercase}}</td>\r\n                <td>{{cliente.celular1 }}</td>\r\n                  <td>\r\n                    <button type=\"button\"\r\n                            class=\"btn btn-rounded btn-outline-success btn-xs\"\r\n                            [routerLink]=\"['/facturas/form', cliente.id]\"\r\n                            >\r\n                    Crear Factura\r\n                  </button>\r\n                  </td>\r\n                  <td>\r\n                    <button type=\"button\"\r\n                        class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n                        [routerLink]=\"['/clientes/form', cliente.id]\"\r\n                        >\r\n                      Editar\r\n                    </button>\r\n                  </td>\r\n                  <!-- <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                      <button type=\"button\"\r\n                          class=\"btn btn-outline-danger\"\r\n                          (click)=\"delete(cliente)\"\r\n                          >\r\n                        Eliminar\r\n                      </button>\r\n                  </td> -->\r\n                    <!-- <th>{{cliente.createAt}}</th> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n    [paginador]=\"paginador\"\r\n    [link]=\"link\">\r\n    </app-paginador>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/buscar-factura-numero/factura-buscar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/buscar-factura-numero/factura-buscar.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalFacturaBuscarService.modal\">\r\n  <!-- <app-detalle-factura\r\n      *ngIf=\"facturaSelecionado\"\r\n      [factura]=\"facturaSelecionado\">\r\n  </app-detalle-factura> -->\r\n  <div  style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header bg-dark text-muted\">\r\n          <h4 class=\"modal-title\">\r\n            <strong>\r\n              Buscar Factura\r\n            </strong>\r\n          </h4>\r\n          <button\r\n            (click)=\"cerrarModalBusquedaFactura()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <form #facturaForm=\"ngForm\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"number\" class=\"form-control\" id=\"codigoFactura\"\r\n                                name=\"id\"\r\n                                [(ngModel)]=\"id\"\r\n                                placeholder=\"Digite Numero de factura\"\r\n                                requiered>\r\n                              <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-success\" type=\"button\"\r\n                                        (click)=\"buscarFactura()\">Buscar\r\n                                </button>\r\n                              </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!factura\"\r\n            class=\"col-sm-6\">\r\n            <div class=\"alert-warning my-3\">\r\n              No se encuentran facturas\r\n            </div>\r\n        </div>\r\n        <table *ngIf=\"factura\"\r\n              class=\"table table-striped table-hover table-sm my-3\" >\r\n          <thead>\r\n            <tr>\r\n              <th>Detalles</th>\r\n              <th>Descripcion</th>\r\n              <th>Fecha</th>\r\n              <th>Total</th>\r\n              <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                  >Ganancia</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr  *ngIf=\"factura\" >\r\n              <td>\r\n                  <img  [routerLink]=\"['/facturas', factura.id]\"\r\n                      src=\"http://localhost:8080/images/factura.jpg\"\r\n                  alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n                  style=\"width: 64px; cursor: pointer;\">\r\n              </td>\r\n              <td>{{factura.descripcion}}</td>\r\n              <td>{{factura.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n              <td>{{formatNumber(factura.total)}}</td>\r\n              <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                  >{{formatNumber(factura.totalGanancia)}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"col-sm-2\">\r\n              <button (click)=\"cerrarModalBusquedaFactura()\"\r\n                type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                Cerrar\r\n              </button>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/buscar-por-rango-fecha/filtrar-facturas.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/buscar-por-rango-fecha/filtrar-facturas.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<app-cliente-facturar></app-cliente-facturar>\r\n<div class=\"card  mb-3\">\r\n<div class=\"card-header bg-dark text-muted\">\r\n  <h3>\r\n    <strong>\r\n     {{titulo}}\r\n    </strong>\r\n  </h3>\r\n</div>\r\n<div class=\"card-body\">\r\n<div class=\"row mb-4\">\r\n  <label for=\"fecha\" class=\"col-form-label col-sm-2\">\r\n    <strong>\r\n      Fecha Inicial\r\n    </strong>\r\n  </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"date\"\r\n            style=\"width: 200px;\"\r\n            class=\"form-control \"\r\n            [(ngModel)]=\"fechaInicioFiltro\"\r\n            name=\"filtro\"\r\n            requiered>\r\n    </div>\r\n    <label for=\"fecha\" class=\"col-form-label col-sm-2\">\r\n      <strong>\r\n        Fecha Final\r\n      </strong>\r\n    </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"date\"\r\n            style=\"width: 200px;\"\r\n            class=\"form-control \"\r\n            [(ngModel)]=\"fechaFinFiltro\"\r\n            name=\"filtro\"\r\n            requiered>\r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n      <button class=\"btn btn-rounded btn-outline-primary\"\r\n      type=\"button\"\r\n      (click)=\"filtrarFacturas()\"\r\n      >\r\n        Filtrar\r\n      </button>\r\n    </div>\r\n\r\n<div class=\"alert alert-info my-3\"\r\n  *ngIf=\"facturas?.length == 0\" >\r\n  <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n</div>\r\n<table class='table table-bordered table-striped my-3'\r\n            *ngIf=\"facturas?.length>0\" >\r\n<thead class=\"bg-dark text-center text-white\">\r\n  <tr>\r\n    <th>Detalles</th>\r\n    <th>Descripcion</th>\r\n    <th>Fecha</th>\r\n    <th>Total</th>\r\n    <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Ganancia</th>\r\n    <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th> -->\r\n  </tr>\r\n</thead>\r\n<tbody  class=\"text-center\">\r\n  <tr\r\n      *ngFor=\"let factura of facturas\" >\r\n    <td>\r\n        <img  [routerLink]=\"['/facturas', factura.id]\"\r\n            src=\"http://localhost:8080/images/factura.jpg\"\r\n        alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n        style=\"width: 64px; cursor: pointer;\">\r\n    </td>\r\n    <td>{{factura.descripcion}}</td>\r\n    <td>{{factura.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n    <td>{{formatNumber(factura.total)}}</td>\r\n    <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n      {{formatNumber(factura.totalGanancia)}}</td>\r\n  </tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n<div *ngIf=\"facturas?.length > 0\"\r\n  class=\"row my-3\">\r\n     <div class=\"col-sm-6 \">\r\n      <mat-card>\r\n        <mat-card-title >\r\n          Total Ventas:\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n          <h1>\r\n              {{formatNumber(totalFiltro)}}\r\n          </h1>\r\n        </mat-card-content>\r\n      </mat-card>\r\n     </div>\r\n     <div class=\"col-sm-6 \">\r\n      <mat-card>\r\n        <mat-card-title>\r\n          Gancia Total:\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n          <h1>\r\n              {{formatNumber(gananciaFiltro)}}\r\n          </h1>\r\n        </mat-card-content>\r\n      </mat-card>\r\n     </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/cliente-facturar/cliente-facturar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/cliente-facturar/cliente-facturar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalFacturaService.modal\">\r\n  <div  style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">\r\n            <strong>\r\n              {{titulo}}:\r\n            </strong>\r\n          </h4>\r\n          <button\r\n            (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <form #clienteForm=\"ngForm\">\r\n                  <div class=\"form-group row \"\r\n                        style=\" min-width: 150px;\r\n                                max-width: 500px;\r\n                                width: 100%;\">\r\n                          <div class=\"col-sm-12\">\r\n                            <mat-form-field style=\"width: 100%;\">\r\n                              <input type=\"text\" placeholder=\"Digite el 'Numero' de documento de identidad del cliente\"\r\n                                      aria-label=\"Clientes\"\r\n                                      matInput [formControl]=\"autocompleteControl\"\r\n                                      [matAutocomplete]=\"auto\">\r\n                              <mat-autocomplete #auto=\"matAutocomplete\"\r\n                                      [displayWith]=\"mostrarNombre\"\r\n                                      (optionSelected)=\"seleccionarCliente($event)\">\r\n                                <mat-option *ngFor=\"let cliente of clientesFiltrados | async\"\r\n                                          [value]=\"cliente\">\r\n                                          Doc: {{cliente.documento}} ~ {{cliente.nombre}} {{cliente.apellido}}\r\n                                </mat-option>\r\n                              </mat-autocomplete>\r\n                            </mat-form-field>\r\n                            <div class=\"alert alert-danger\"\r\n                                  *ngIf=\"autocompleteControl.invalid && clienteForm.submitted\">\r\n                              Debe Agregar Un Cliente\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <table class=\"table table-striped table-hover table-sm text-center\" >\r\n                      <thead class=\"bg-dark  text-white\">\r\n                        <tr>\r\n                          <th>Detalles</th>\r\n                          <th>Nombre</th>\r\n                          <th>Apellido</th>\r\n                          <th>Documento</th>\r\n                         </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr  *ngIf=\"cliente\" >\r\n                          <td>\r\n                            <img *ngIf=\"cliente?.foto\"  [routerLink]=\"['/clientes/details', cliente.id]\"\r\n                                src=\"http://localhost:8080/api/uploads/imgcliente/{{cliente.foto}}\"\r\n                            alt=\"{{cliente.foto}}\" class=\"img-thumbnail rounded\"\r\n                            style=\"width: 64px; cursor: pointer;\">\r\n                            <img *ngIf=\"!cliente?.foto\"  [routerLink]=\"['/clientes/details', cliente.id]\"\r\n                                src=\"http://localhost:8080/images/no-usuario.png\"\r\n                            alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n                            style=\"width: 64px; cursor: pointer;\">\r\n                        </td>\r\n                          <td>{{cliente.nombre | uppercase}}</td>\r\n                          <td>{{cliente.apellido | uppercase}}</td>\r\n                          <td>{{cliente.documento}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"col-sm-10\">\r\n            <button *ngIf=\"cliente\"\r\n                (click)=\"cerrarModal()\"\r\n                type=\"button\"\r\n                class=\"btn btn-success btn-sm my-2\"\r\n                [routerLink]=\"['/facturas/form', id]\"\r\n                >\r\n                  Crear Factura\r\n            </button>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button (click)=\"cerrarModal()\"\r\n                type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                Cerrar\r\n              </button>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/detalle-factura/detalle-factura.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/detalle-factura/detalle-factura.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<div class=\"card\" *ngIf=\"factura\">\r\n  <div class=\"card-header bg-dark text-muted\">\r\n    <h4>\r\n      <strong> {{ titulo }} {{ factura.numeroFactura }} </strong>\r\n    </h4>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\">\r\n      <a\r\n        [routerLink]=\"['/clientes/details', factura.cliente.id]\"\r\n        class=\"btn btn-rounded btn-outline-warning btn-xs mx-1\"\r\n        >&laquo; Regresar</a\r\n      >\r\n      <button\r\n        (click)=\"generarFactura(factura)\"\r\n        class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n        type=\"button\"\r\n      >\r\n        Imprimir\r\n      </button>\r\n    </h4>\r\n    <ul class=\"list-group my-2\"  >\r\n      <li class=\"list-group-item list-group-item-primary bg-dark text-muted\">\r\n        Datos del cliente\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Nombres: </strong> {{ factura.cliente.nombre | uppercase }}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Apellidos: </strong> {{ factura.cliente.apellido | uppercase }}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Documento:</strong> {{ factura.cliente.documento }}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Celular:</strong> {{ factura.cliente.celular1 }}\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"list-group my-2\">\r\n      <li class=\"list-group-item list-group-item-primary bg-dark text-muted\">\r\n        Datos de la factura\r\n      </li>\r\n      <li class=\"list-group-item\"><strong>Folio: </strong> {{ factura.id }}</li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Descripción: </strong> {{ factura.descripcion | uppercase }}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Fecha Facturación: </strong>\r\n        {{ factura.createAt | date: \"fullDate\" }}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong>Vendedor: </strong> {{ factura.usuario.nombre }}\r\n        {{ factura.usuario.apellido }}\r\n      </li>\r\n    </ul>\r\n\r\n    <table id=\"tablaFactura\"\r\n      class=\"table table-striped table-hover table-bordered my-3 border-info\"\r\n    >\r\n      <thead class=\"bg-dark text-center text-muted\">\r\n        <tr>\r\n          <th style=\"max-width: 35px;\">Codigo</th>\r\n          <th class=\"text-center\">Producto</th>\r\n          <th>Precio</th>\r\n          <th  style=\"max-width: 40px;\">Cantidad</th>\r\n          <th>Sub-Total</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let item of factura.items\">\r\n          <td style=\"max-width: 35px;\" class=\"text-left\">{{ item.producto.codigo }}</td>\r\n          <td>{{ item.producto.nombre | uppercase }}</td>\r\n          <td>{{ formatNumber(item.producto.precio) }}</td>\r\n          <td style=\"max-width: 40px;\">{{ item.cantidad }}</td>\r\n          <td>{{ formatNumber(item.importe) }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <h5 *ngIf=\"factura.descuento\" class=\"float-right\">\r\n      <strong>Descuento</strong>:\r\n      <span class=\"badge badge-danger m-2 p-2\">\r\n        {{ formatNumber(factura.descuento) }}\r\n      </span>\r\n    </h5>\r\n\r\n    <h5 class=\"float-right\">\r\n      <strong>Total</strong>:\r\n      <span class=\"badge badge-warning m-2 p-2\">\r\n        {{ formatNumber(factura.total) }}\r\n      </span>\r\n    </h5>\r\n    <h5 class=\"float-right\" *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n      <strong>Ganancia Total</strong>:\r\n      <span class=\"badge badge-success m-2 p-2\">\r\n        {{ formatNumber(factura.totalGanancia) }}\r\n      </span>\r\n    </h5>\r\n\r\n    <div class=\"card border-info mb-4\" style=\"max-width: 350px\">\r\n      <div class=\"card card-header bg-dark text-muted\">Observaciones</div>\r\n      <div class=\"card card-body\">\r\n        <p *ngIf=\"!factura.observacion\">No tiene observación</p>\r\n        <p *ngIf=\"factura.observacion\">{{ factura.observacion | uppercase }}</p>\r\n      </div>\r\n    </div>\r\n    <a\r\n      [routerLink]=\"['/clientes/details', factura.cliente.id]\"\r\n      class=\"btn btn-rounded btn-outline-warning btn-xs\"\r\n      >&laquo; Regresar</a\r\n    >\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturacion/facturas.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturacion/facturas.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<div class=\"card\">\r\n  <div class=\"card-header bg-dark text-muted\">\r\n    <h4>\r\n      <strong>\r\n        {{ titulo }}\r\n      </strong>\r\n    </h4>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\">\r\n      <a\r\n        [routerLink]=\"['/clientes']\"\r\n        class=\"btn btn-rounded btn-outline-warning btn-xs\"\r\n      >\r\n        &laquo; volver\r\n      </a>\r\n    </h4>\r\n\r\n    <form #facturaForm=\"ngForm\">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"form-group row\">\r\n            <label for=\"numeroFactura\" class=\"col-sm-2 col-form-label\">\r\n              <strong> Numero Factura: </strong>\r\n            </label>\r\n            <div class=\"col-sm-6\" >\r\n              <input *ngIf=\"numeroFactura\"\r\n                type=\"text\"\r\n                name=\"numeroFactura\"\r\n                [(ngModel)]=\"factura.numeroFactura\"\r\n                class=\"form-control\"\r\n                required\r\n                #numeroFactura=\"ngModel\"\r\n                disabled\r\n              />\r\n            <div *ngIf=\"!numeroFactura\">\r\n              <span class=\"alert alert-danger pb-0 \">Favor Ingresar Numero De Factura Inicial</span>\r\n              <strong>\r\n              <input \r\n                type=\"text\"\r\n                name=\"numeroFactura\"\r\n                [(ngModel)]=\"factura.numeroFactura\"\r\n                class=\"form-control\"\r\n                required\r\n                #numeroFactura=\"ngModel\"\r\n                autofocus\r\n              />\r\n            </strong>\r\n              <div\r\n                class=\"alert alert-danger\"\r\n                *ngIf=\"\r\n                  (numeroFactura.invalid && numeroFactura.touched) ||\r\n                  (numeroFactura.invalid && facturaForm.submitted)\r\n                \"\r\n              >\r\n                El Numero de Factura es requerido es requerida.\r\n              </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"factura.cliente\">\r\n            <label for=\"cliente\" class=\"col-sm-2 col-form-label\">\r\n              <strong> Cliente: </strong>\r\n            </label>\r\n            <div class=\"col-sm-6\">\r\n              <input\r\n                type=\"text\"\r\n                name=\"cliente\"\r\n                value=\"{{ factura.cliente.nombre }} {{\r\n                  factura.cliente.apellido\r\n                }}\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label for=\"observacion\" class=\"col-sm-2 col-form-label\">\r\n              <strong> Observación: </strong>\r\n            </label>\r\n            <div class=\"col-sm-6\">\r\n              <textarea\r\n                name=\"observacion\"\r\n                [(ngModel)]=\"factura.observacion\"\r\n                class=\"form-control\"\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card style=\"margin-top: 20px\">\r\n        <mat-card-content>\r\n          <div\r\n            style=\"\r\n              min-width: 150px;\r\n              max-width: 750px;\r\n              margin-top: 20px;\r\n              width: 100%;\r\n            \"\r\n            class=\"form-group row\"\r\n          >\r\n            <div class=\"col-sm-12\">\r\n              <mat-form-field style=\"width: 100%\">\r\n                <input\r\n                  type=\"text\"\r\n                  placeholder=\"Digite el codigo o nombre del producto para Agregar\"\r\n                  aria-label=\"Productos\"\r\n                  matInput\r\n                  [formControl]=\"autocompleteControl\"\r\n                  [matAutocomplete]=\"auto\"\r\n                />\r\n                <mat-autocomplete\r\n                  #auto=\"matAutocomplete\"\r\n                  [displayWith]=\"mostrarNombre\"\r\n                  (optionSelected)=\"seleccionarProducto($event)\"\r\n                >\r\n                  <mat-option\r\n                    *ngFor=\"let producto of productosFiltrados | async\"\r\n                    [value]=\"producto\"\r\n                  >\r\n                    <span *ngIf=\"producto.cantidad <= 0\">\r\n                      <span class=\"alert-danger mr-1\" style=\"font-size: 1rem\">\r\n                        --NO HAY STOCK DISPONIBLE-- --{{ producto.codigo }} --\r\n                        --{{ producto.nombre | uppercase }}-- --{{\r\n                          formatNumber(producto.precio)\r\n                        }}--\r\n                      </span>\r\n                    </span>\r\n                    <span style=\"font-size: 1rem\" *ngIf=\"producto.cantidad > 0\">\r\n                      {{ producto.codigo }} --\r\n                      {{ producto.nombre | uppercase }} --\r\n                      {{ formatNumber(producto.precio) }} --\r\n                    </span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n              <div\r\n                class=\"alert alert-danger\"\r\n                *ngIf=\"autocompleteControl.invalid && facturaForm.submitted\"\r\n              >\r\n                No se puede facturar no hay \"articulos\" agregados a la factura.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"alert alert-info my-4\" *ngIf=\"factura.items.length == 0\">\r\n            No hay líneas asignadas para la factura. Debe agregar al menos una!\r\n          </div>\r\n          <table\r\n            style=\"font-size: 1rem\"\r\n            class=\"table table-striped table-hover table-sm table-bordered\"\r\n            *ngIf=\"factura.items.length > 0\"\r\n          >\r\n            <thead class=\"bg-dark text-center text-white\">\r\n              <tr>\r\n                <th>Codigo</th>\r\n                <th>Producto</th>\r\n                <th>Precio</th>\r\n                <th>Stock</th>\r\n                <th style=\"max-width: 50px\">Cantidad</th>\r\n                <th>Sub-Total</th>\r\n                <th>Eliminar</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"text-center\">\r\n              <tr *ngFor=\"let item of factura.items\">\r\n                <td class=\"text-left\">{{ item.producto.codigo }}</td>\r\n                <td class=\"text-left\">\r\n                  {{ item.producto.nombre | uppercase }}\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  {{ formatNumber(item.producto.precio) }}\r\n                </td>\r\n                <td\r\n                  style=\"max-width: 80px; padding-top: 8px\"\r\n                  *ngIf=\"item.producto.cantidad > 3\"\r\n                >\r\n                  {{ item.producto.cantidad }}\r\n                </td>\r\n                <td\r\n                  style=\"max-width: 80px; margin-top: 8px\"\r\n                  class=\"badge badge-danger\"\r\n                  *ngIf=\"item.producto.cantidad <= 3\"\r\n                >\r\n                  {{ item.producto.cantidad }}\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <input\r\n                    type=\"number\"\r\n                    style=\"max-width: 60px; margin-left: 10px; padding: 0\"\r\n                    [(ngModel)]=\"item.cantidad\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    class=\"form-control\"\r\n                    (change)=\"actualizarCantidad(item.producto.id, $event)\"\r\n                  />\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  {{ formatNumber(item.calcularImporte()) }}\r\n                </td>\r\n                <td>\r\n                  <button\r\n                    class=\"btn btn-danger btn-sm\"\r\n                    type=\"button\"\r\n                    (click)=\"eliminarItemFactura(item.producto.id)\"\r\n                  >\r\n                    x\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card style=\"margin-top: 20px\">\r\n        <mat-card-content>\r\n          <h5 class=\"float-left mx-2\" *ngIf=\"factura.items.length > 0\">\r\n            <strong>Descuento</strong>:\r\n            <input\r\n              style=\"max-width: 120px\"\r\n              type=\"number\"\r\n              [(ngModel)]=\"factura.descuento\"\r\n              min=\"1\"\r\n              pattern=\"^[0-9]+\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n            />\r\n          </h5>\r\n          <h5 *ngIf=\"factura.descuento\" class=\"float-right\">\r\n            <strong>Descuento</strong>:\r\n            <span class=\"badge badge-danger\">\r\n              {{ validarDescuento(factura) }}\r\n            </span>\r\n          </h5>\r\n\r\n          <h5 class=\"float-right\" *ngIf=\"factura.items.length > 0\">\r\n            <strong>Total</strong>:\r\n            <span class=\"badge badge-warning mx-1\">\r\n              {{ formatNumber(factura.calcularGranTotal()) }}\r\n            </span>\r\n          </h5>\r\n          <h5\r\n            class=\"float-right\"\r\n            *ngIf=\"\r\n              authService.hasRole('ROLE_ADMIN') && factura.items.length > 0\r\n            \"\r\n          >\r\n            <strong>Ganancia Total</strong>:\r\n            <span class=\"badge badge-success mx-1\">\r\n              {{ formatNumber(factura.calcularGananciaTotal()) }}\r\n            </span>\r\n          </h5>\r\n          <div *ngIf=\"factura.items.length > 0\" class=\"form-group row\">\r\n            <div class=\"col-sm-6\">\r\n              <section class=\"example-section\">\r\n                <mat-checkbox\r\n                  class=\"example-margin\"\r\n                  [(ngModel)]=\"checked\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  >Validar</mat-checkbox\r\n                >\r\n              </section>\r\n              <input\r\n                *ngIf=\"!checked\"\r\n                type=\"submit\"\r\n                value=\"Crear Factura\"\r\n                style=\"background: rgba(112, 65, 65, 0.507)\"\r\n                [disabled]=\"true\"\r\n                (click)=\"create(facturaForm)\"\r\n                class=\"btn btn-secondary\"\r\n              />\r\n              <input\r\n                *ngIf=\"checked\"\r\n                type=\"submit\"\r\n                style=\"background: green\"\r\n                (click)=\"create(facturaForm)\"\r\n                value=\"Crear Factura\"\r\n                class=\"btn btn-secondary\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/lista-facturas/lista-facturas.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/lista-facturas/lista-facturas.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<app-factura-buscar></app-factura-buscar>\r\n<app-cliente-facturar></app-cliente-facturar>\r\n<div class=\"card  mb-3\">\r\n<div class=\"card-header bg-dark text-muted\"><h3><strong>{{titulo}}</strong></h3></div>\r\n<div class=\"card-body\">\r\n<h4 class=\"card-title text-muted\">Listado de Facturas</h4>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <div class=\"my-2 text-left\">\r\n      <button class=\"btn btn-rounded btn-outline-primary btn-xs\"\r\n      type=\"button\"\r\n      (click)=\"abrirModalBuscarFactura()\"\r\n      >\r\n        Buscar Factura\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-10\">\r\n    <div class=\"my-2 text-left\">\r\n      <button class=\"btn btn-rounded btn-outline-success btn-xs\"\r\n      type=\"button\"\r\n      (click)=\"abrirModal()\"\r\n      >\r\n        Crear Factura\r\n      </button>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"alert alert-info\"\r\n  *ngIf=\"facturas?.length == 0\" >\r\n  <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n</div>\r\n<table class='table table-bordered table-striped'\r\n            *ngIf=\"facturas?.length>0\" >\r\n<thead class=\"bg-dark text-center text-white\">\r\n  <tr>\r\n    <th>Detalles</th>\r\n    <th>Descripcion</th>\r\n    <th>Fecha</th>\r\n    <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Ganancia</th>\r\n    <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th> -->\r\n  </tr>\r\n</thead>\r\n<tbody class=\"text-center\">\r\n  <tr *ngFor=\"let factura of facturas\" >\r\n    <td>\r\n        <img  [routerLink]=\"['/facturas', factura.id]\"\r\n            src=\"http://localhost:8080/images/factura.jpg\"\r\n        alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n        style=\"width: 64px; cursor: pointer;\">\r\n    </td>\r\n    <td>{{factura.descripcion}}</td>\r\n    <td>{{factura.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n    <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n      {{formatNumber(factura.totalGanancia)}}</td>\r\n  </tr>\r\n</tbody>\r\n</table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n        [paginador]=\"paginador\"\r\n        [link]=\"link\">\r\n    </app-paginador>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer\r\n        style=\"position: absolute;\r\n        bottom: 0px;\r\n        height: 60px;\r\n        width: 100%;\"\r\n        class=\"footer bg-dark rounded-top text-center\">\r\n  <div class=\"container py-2\">\r\n    <p class=\"text-white\">\r\n      &copy; {{ autor.nombre+ '' +autor.apellido}}\r\n    </p>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generales/loading/loading.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generales/loading/loading.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\">\r\n  <div  style=\"display: block; background:none ;\"\r\n    class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm \" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n          <img src=\"../../../assets/images/loading-arrow.gif\" alt=\"loading\">\r\n          <h3>Cargando....</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generales/pagina404/pagina404.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generales/pagina404/pagina404.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div className=\"container\">\r\n  <div className=\"row\">\r\n      <div className=\"col-10 mx-auto text-center text-title\r\n                      text-uppercase pt-5\">\r\n          <h1 className=\"display-3\">\r\n              404\r\n          </h1>\r\n          <h1>\r\n              error\r\n          </h1>\r\n          <h2>\r\n             pagina no encontrada\r\n          </h2>\r\n          <h3>\r\n              the request URL\r\n              <span className=\"text-danger\">\r\n                  <!-- {this.props.location.pathname} -->\r\n              </span>\r\n                  <!-- {\" \"}\r\n                  was not found -->\r\n           </h3>\r\n      </div>\r\n  </div>\r\n</div>\r\n<a class=\"nav-link\" routerLink=\"/\">ir pagina principal </a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generales/paginador/paginador.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generales/paginador/paginador.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"paginas?.length>0\" class=\"pagination \" >\r\n  <li class=\"page-item \" *ngIf=\"paginador.number > 0\" >\r\n      <a class=\"page-link \" [routerLink]=\"[link, paginador.number-1]\">&laquo;</a>\r\n  </li>\r\n  <li [ngClass]=\"paginador.first?'disabled page-item ': 'page-item '\" >\r\n      <a class=\"page-link \" [routerLink]=\"[link, 0]\">Primera</a>\r\n  </li>\r\n  <li class=\"page-item \" *ngFor=\"let pagina of paginas\"\r\n  [ngClass]=\"pagina-1 === paginador.number? 'active': ''\"  >\r\n    <span class=\"page-link text-muted \"\r\n    *ngIf=\"pagina-1 === paginador.number\">\r\n      <strong>{{pagina}}</strong>\r\n    </span>\r\n    <a class=\"page-link \" *ngIf=\"pagina-1 !== paginador.number\" [routerLink]=\"[link, pagina-1]\">\r\n      {{pagina}}\r\n    </a>\r\n  </li>\r\n  <li [ngClass]=\"paginador.last?'disabled page-item ': 'page-item '\" >\r\n      <a class=\"page-link \" [routerLink]=\"[link, paginador.totalPages - 1]\">Ultima</a>\r\n  </li>\r\n  <li class=\"page-item \" *ngIf=\"paginador.number < paginador.totalPages - 1\" >\r\n      <a class=\"page-link \" [routerLink]=\"[link, paginador.number+1]\">&raquo;</a>\r\n\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img  src=\"http://localhost:8080/images/logo-pagina.jpg\"\r\n          alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n          style=\"width: 64px; cursor: pointer;\">\r\n  </a>\r\n  <button class=\"navbar-toggler\"\r\n          type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul *ngIf=\"authService.hasRole('ROLE_USER')\"\r\n      class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/clientes\">Clientes</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/productos\">Productos</a>\r\n      </li>\r\n      \r\n      <!-- <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/servicios\">Servicios</a>\r\n      </li> -->\r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/users\"\r\n        *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Usuarios</a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/facturas\">Facturas </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"factura/filtrar\"\r\n            *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Informes</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/sucursales\">Sucursales</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive='Active'>\r\n        <a class=\"nav-link\" routerLink=\"/regiones\">Barrios</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n      <!-- <li *ngIf=\"!authService.isAuthenticated()\">\r\n        <a [routerLink]=\"['/login']\" class=\"btn btn-outline-primary\">Sign In</a></li> -->\r\n      <li *ngIf=\"authService.isAuthenticated()\" class=\"dropdown mr-1 \">\r\n        <a class=\"btn btn-outline-primary dropdown-toggle ml-5 pl-5\" href=\"#\"\r\n            role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{authService.usuario.username}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink mr-5\">\r\n          <button (click)=\"logout()\" class=\"dropdown-item btn-sm mr-5\"\r\n          type=\"submit\">Cerrar Sesion</button>\r\n       </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/detalle-producto/detalle-producto.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/detalle-producto/detalle-producto.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<div class=\"container\"  *ngIf=\"producto\">\r\n    <a [routerLink]=\"['/productos']\"\r\n              class=\"btn btn-outline-warning btn-xs my-2\">&laquo;\r\n              Regresar\r\n    </a>\r\n    <button\r\n            type=\"button\"\r\n            class=\"btn btn-outline-secondary btn-xs my-2 mx-3\"\r\n            [routerLink]=\"['/productos/form', producto.id]\"\r\n    >\r\n      Editar\r\n    </button>\r\n   \r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <ul *ngIf=\"producto\"  class=\"list-group text-dark mb-1\">\r\n        <!-- <li class=\"list-group-item active\">{{producto.categoria.nombre | uppercase}}</li> -->\r\n        <!-- <li class=\"list-group-item \">{{producto.codigo}}</li> -->\r\n        <li class=\"list-group-item active bg-dark text-white-50\">\r\n          <strong>Producto: </strong>\r\n          {{producto.nombre | uppercase}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Codigo: </strong>\r\n        {{producto.codigo}}\r\n      </li>\r\n        <li class=\"list-group-item\">\r\n            <strong>Descripcion: </strong>\r\n          {{producto.descripcion}}\r\n        </li>\r\n        <li *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n            class=\"list-group-item\">\r\n            <strong>Precio Compra: </strong>\r\n            {{formatNumber(producto.precioCompra)}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            <strong>Precio Venta: </strong>\r\n          {{formatNumber(producto.precio)}}\r\n        </li>\r\n        <li class=\"list-group-item bg-danger text-white\"\r\n            *ngIf=\"producto.cantidad <= 3\">\r\n            <strong>Cantidad: </strong>\r\n            {{producto.cantidad}}\r\n        </li>\r\n        <li class=\"list-group-item\"\r\n            *ngIf=\"producto.cantidad > 3\">\r\n            <strong>Cantidad: </strong>\r\n            {{producto.cantidad}}\r\n        </li>\r\n        <li *ngIf=\"(producto.cantidad >0) && authService.hasRole('ROLE_ADMIN')\"\r\n            class=\"list-group-item\">\r\n            <strong>Total Inversion: </strong>\r\n            {{calcularInversion(producto.cantidad, producto.precioCompra)}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            <strong>Ult. Movimiento: </strong>\r\n          {{producto.createAt | date:\"fullDate\"}}\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"input-group mb-1\">\r\n        <div class=\"custom-file\">\r\n          <input (change)=\"seleccionarFoto($event)\"\r\n                style=\"cursor: pointer;\"\r\n                type=\"file\" class=\"custom-file-input\"\r\n                id=\"inputGroupFile04\" aria-describedby=\"inputGroupFileAddon04\">\r\n          <label style=\"cursor: pointer;\"\r\n                 class=\"custom-file-label\"\r\n                 for=\"inputGroupFile04\">{{rutaFoto}}</label>\r\n        </div>\r\n        <div class=\"input-group-append\">\r\n          <button (click)=\"subirFoto()\"\r\n\r\n            [disabled]=\"!fotoSelecionada\"\r\n            class=\"btn btn-outline-secondary\"\r\n            type=\"button\" id=\"inputGroupFileAddon04\">Subir</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"progreso>0 \"  class=\"progress\" style=\"height: 40px;\">\r\n          <div class=\"progress-bar progress-bar-striped\"\r\n              role=\"progressbar\"\r\n              [ngStyle]= \"{width: progreso+'%'}\"\r\n              attr.aria-valuenow=\"{{progreso}}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\">\r\n              {{progreso}}%\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img *ngIf=\"producto?.foto\"\r\n          src=\"http://localhost:8080/api/uploads/imgproducto/{{producto.foto}}\"\r\n          alt=\"{{producto.foto}}\" class=\"img-thumbnail rounded\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/formularios/form-producto.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/formularios/form-producto.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<ul class=\"alert alert-danger\" *ngIf=\"errores?.length>0\" >\r\n    <li  *ngFor=\"let err of errores\" >\r\n      {{err}}\r\n    </li>\r\n</ul>\r\n<div class=\"card bg-dark text-white\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">\r\n        <strong>\r\n          {{titulo}}:\r\n        </strong>\r\n      </h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form #productoForm=\"ngForm\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"nombre\" class=\"col-form-label col-sm-2 text-right\">Nombre :</label>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"text\" class=\"form-control\"\r\n                    style=\"text-transform:uppercase;\"\r\n                    [(ngModel)]=\"producto.nombre\"\r\n                    placeholder=\"Digite un nombre para el Producto\"\r\n                    name=\"nombre\"\r\n                    minlength=\"3\"\r\n                    maxlength=\"50\"\r\n                    #nombre=\"ngModel\"\r\n                    requiered>\r\n              \r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"codigo\" class=\"col-form-label col-sm-2 text-right\">Codigo:</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"number\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"producto.codigo\"\r\n                    name=\"codigo\"\r\n                    placeholder=\"Solo Numeros, No digite 'puntos' ( . ) ni 'comas'( , )\"\r\n                    minlength=\"2\"\r\n                    maxlength=\"4\"\r\n                    #precioCompra=\"ngModel\"\r\n                    requiered>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"descripcion\" class=\"col-form-label col-sm-2 text-right\">Descripcion :</label>\r\n          <div class=\"col-sm-6\">\r\n            <textarea class=\"form-control\"\r\n                      style=\"text-transform:uppercase;\"\r\n                      placeholder=\"Digite cualquier dato que considere importante\"\r\n                      [(ngModel)]=\"producto.descripcion\"\r\n                      name=\"descripcion\"\r\n                      >\r\n            </textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"precioCompra\" class=\"col-form-label col-sm-2 text-right\">Precio Compra :</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"number\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"producto.precioCompra\"\r\n                    name=\"precioCompra\"\r\n                    placeholder=\"Solo Numeros, No digite 'puntos' ( . ) ni 'comas'( , )\"\r\n                    minlength=\"2\"\r\n                    maxlength=\"4\"\r\n                    #precioCompra=\"ngModel\"\r\n                    requiered>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label for=\"precio\" class=\"col-form-label col-sm-2 text-right\">Precio Venta :</label>\r\n              <div class=\"col-sm-6\">\r\n                <input type=\"number\"\r\n                    class=\"form-control\"\r\n                      [(ngModel)]=\"producto.precio\"\r\n                      name=\"precio\"\r\n                      placeholder=\"Solo Numeros, No digite 'puntos' ( . ) ni 'comas'( , )\"\r\n                      minlength=\"2\"\r\n                      maxlength=\"4\"\r\n                      #precio=\"ngModel\"\r\n                      requiered>\r\n                      <!-- <div class=\"alert alert-danger pt-2\" *ngIf=\"precio.invalid\" >\r\n                        <div class=\"\" *ngIf=\"precio?.errors.requiered\" >\r\n                          Precio Venta es Requerido\r\n                        </div>\r\n                        <div class=\"\" *ngIf=\"precio?.errors?.minlength\" >\r\n                          Precio Compra debe contener minimo 2 digitos\r\n                        </div>\r\n                    </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"cantidad\" class=\"col-form-label col-sm-2 text-right\">Cantidad :   </label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"number\"\r\n                      class=\"form-control\"\r\n                        [(ngModel)]=\"producto.cantidad\"\r\n                        name=\"cantidad\"\r\n                        minlength=\"0\"\r\n                        placeholder=\"Solo Numeros, No digite 'puntos' ( . ) ni 'comas'( , )\"\r\n                        #cantidad=\"ngModel\"\r\n                        >\r\n                </div>\r\n              </div>\r\n          <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <button class=\"btn btn-primary\"\r\n                        role=\"button\"\r\n                        (click)=\"create()\"\r\n                        *ngIf=\"!producto.id else elseBlock\"\r\n                        [disabled]=\"!productoForm.form.valid\">\r\n                  Crear\r\n                </button>\r\n                <ng-template #elseBlock>\r\n                    <button class=\"btn btn-primary\"\r\n                        role=\"button\"\r\n                        (click)=\"update()\"\r\n                        [disabled]=\"!productoForm.form.valid\">\r\n                  Actualizar\r\n                </button>\r\n                </ng-template>\r\n\r\n              </div>\r\n            </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/lista-productos/productos.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/lista-productos/productos.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<app-producto-buscar></app-producto-buscar>\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-header bg-dark text-muted\">\r\n    <h3>\r\n      <strong>{{ titulo }}</strong>\r\n    </h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado de Productos</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <div class=\"my-2 text-left\">\r\n          <button\r\n            class=\"btn btn-rounded btn-outline-primary btn-xs\"\r\n            type=\"button\"\r\n            (click)=\"abrirModalProductoBuscar()\"\r\n          >\r\n            Buscar Producto\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"my-2 text-left\">\r\n          <button\r\n            *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n            class=\"btn btn-rounded btn-outline-info btn-xs\"\r\n            type=\"button\"\r\n            [routerLink]=\"['/productos/form']\"\r\n          >\r\n            Crear Productos\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"alert alert-info\" *ngIf=\"productos?.length == 0\">\r\n      <span class=\"text-muted\"\r\n        ><strong>No hay registros en la Base de Datos</strong></span\r\n      >\r\n    </div>\r\n    <table\r\n      class=\"table table-bordered table-striped\"\r\n      *ngIf=\"productos?.length > 0\"\r\n    >\r\n      <thead class=\"bg-dark text-center text-white\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Codigo</th>\r\n          <th>Nombre</th>\r\n          <th>Precio</th>\r\n          <th>Stock</th>\r\n          <th>Descripcion</th>\r\n          <th>Fec. Ultimo Mov.</th>\r\n          <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Editar</th>\r\n          <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let producto of productos\">\r\n          <td>\r\n            <img\r\n              *ngIf=\"producto?.foto\"\r\n              [routerLink]=\"['/productos/detalle', producto.id]\"\r\n              src=\"http://localhost:8080/api/uploads/imgproducto/{{\r\n                producto.foto\r\n              }}\"\r\n              alt=\"{{ producto.foto }}\"\r\n              class=\"img-thumbnail rounded\"\r\n              style=\"width: 64px; cursor: pointer;\"\r\n            />\r\n            <img\r\n              *ngIf=\"!producto?.foto\"\r\n              [routerLink]=\"['/productos/detalle', producto.id]\"\r\n              src=\"http://localhost:8080/images/no-producto.png\"\r\n              alt=\"no-producto\"\r\n              class=\"img-thumbnail rounded\"\r\n              style=\"width: 64px; cursor: pointer;\"\r\n            />\r\n          </td>\r\n          <td>{{ producto.codigo }}</td>\r\n          <td>{{ producto.nombre | uppercase }}</td>\r\n          <td>{{ formatNumber(producto.precio) }}</td>\r\n          <td class=\"badge badge-danger mt-2\" *ngIf=\"producto.cantidad <= 3\">\r\n            <strong>\r\n              {{ producto.cantidad }}\r\n            </strong>\r\n          </td>\r\n          <td *ngIf=\"producto.cantidad > 3\">\r\n            {{ producto.cantidad }}\r\n          </td>\r\n          <td>{{ producto.descripcion }}</td>\r\n          <td>{{ producto.createAt | date: \"EEEE dd, MMMM yyyy\" }}</td>\r\n          <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-outline-secondary btn-xs\"\r\n              [routerLink]=\"['/productos/form', producto.id]\"\r\n            >\r\n              Editar\r\n            </button>\r\n          </td>\r\n          <!-- <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                          <button type=\"button\"\r\n                              class=\"btn btn-outline-danger\"\r\n                              (click)=\"delete(producto)\"\r\n                              >\r\n                            Eliminar\r\n                          </button>\r\n                      </td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\" [paginador]=\"paginador\" [link]=\"link\">\r\n    </app-paginador>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/producto-buscar/producto-buscar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/producto-buscar/producto-buscar.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalProductoBuscarService.modal\">\r\n  <app-detalle-producto\r\n      *ngIf=\"productoSelecionado\"\r\n      [producto]=\"productoSelecionado\"></app-detalle-producto>\r\n  <div  style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">\r\n            <strong>\r\n              {{titulo}}:\r\n            </strong>\r\n          </h4>\r\n          <button\r\n            (click)=\"cerrarModalBusquedaProducto()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <form #productoForm=\"ngForm\">\r\n                  <div class=\"form-group row example-form\">\r\n                          <div class=\"col-sm-12\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                              <input type=\"text\" placeholder=\"Digite Nombre Del Producto\"\r\n                                      aria-label=\"Productos\"\r\n                                      matInput [formControl]=\"autocompleteControl\"\r\n                                      [matAutocomplete]=\"auto\">\r\n                              <mat-autocomplete #auto=\"matAutocomplete\"\r\n                                      [displayWith]=\"mostrarNombre\"\r\n                                      (optionSelected)=\"seleccionarProducto($event)\">\r\n                                <mat-option *ngFor=\"let producto of productosFiltrados | async\"\r\n                                          [value]=\"producto\">\r\n                                          <span *ngIf=\"producto.cantidad<=0\">\r\n                                            <span class=\" alert-danger mr-1 \"\r\n                                                  style=\"font-size: 1rem;\">\r\n                                                   * * NO HAY STOCK DISPONIBLE * *\r\n                                                   {{producto.nombre | uppercase}}\r\n                                                   * * {{formatNumber(producto.precio) }} * *\r\n                                            </span>\r\n                                          </span>\r\n                                          <span\r\n                                                style=\"font-size: 1rem;\"\r\n                                                *ngIf=\"producto.cantidad>0\">\r\n                                            {{producto.nombre | uppercase}}  * * {{formatNumber(producto.precio)}} * *\r\n                                          </span>\r\n                                </mat-option>\r\n                              </mat-autocomplete>\r\n                            </mat-form-field>\r\n                            <div class=\"alert alert-danger\"\r\n                                  *ngIf=\"autocompleteControl.invalid && productoForm.submitted\">\r\n                              Debe Agregar Producto\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <table class=\"table text-center table-striped table-hover table-sm\" >\r\n                      <thead class=\"bg-dark  text-white\">\r\n                        <tr>\r\n                          <th>Detalles</th>\r\n                          <th>Nombre</th>\r\n                          <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                              Precio Costo\r\n                          </th>\r\n                          <th>Precio Venta</th>\r\n                          <th>Cantidad</th>\r\n                         </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr  *ngIf=\"producto\" >\r\n                          <td>\r\n                            <img *ngIf=\"producto?.foto\"  (click)=\"abrirModal(producto)\"\r\n                                src=\"http://localhost:8080/api/uploads/imgproducto/{{producto.foto}}\"\r\n                            alt=\"{{producto.foto}}\" class=\"img-thumbnail rounded\"\r\n                            style=\"width: 64px; cursor: pointer;\">\r\n                            <img *ngIf=\"!producto?.foto\"  (click)=\"abrirModal(producto)\"\r\n                                src=\"http://localhost:8080/images/no-producto.png\"\r\n                            alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n                            style=\"width: 64px; cursor: pointer;\">\r\n                        </td>\r\n                          <td>{{producto.nombre | uppercase}}</td>\r\n                          <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                              {{formatNumber(producto.precioCompra)}}\r\n                          </td>\r\n                          <td>{{formatNumber(producto.precio)}}</td>\r\n                          <td class=\"badge badge-danger mt-2\"\r\n                              *ngIf=\"producto.cantidad <= 3\">\r\n                              <strong >\r\n                                  {{producto.cantidad}}\r\n                              </strong>\r\n                          </td>\r\n                          <td\r\n                              *ngIf=\"producto.cantidad > 3\">\r\n                              {{producto.cantidad}}\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n\r\n            <div class=\"col-sm-2\">\r\n              <button (click)=\"cerrarModalBusquedaProducto()\"\r\n                type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                Cerrar\r\n              </button>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/detalle-region/detalle-region.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/detalle-region/detalle-region.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\"  *ngIf=\"modalRegionService.modal\">\r\n  <div style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header bg-dark text-muted\">\r\n          <h4 class=\"modal-title\">\r\n            <strong>\r\n              {{titulo}}\r\n            </strong>\r\n          </h4>\r\n          <button (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <ul *ngIf=\"region\"  class=\"list-group text-dark mb-3\">\r\n                  <li class=\"list-group-item active\">{{region.nombre}}</li>\r\n                  <li class=\"list-group-item\">{{region.createAt | date:\"fullDate\"}}</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button\r\n                        type=\"button\"\r\n                        class=\"btn btn-rounded btn-outline-secondary btn-xs mx-2\"\r\n                        [routerLink]=\"['/regiones/form', region.id]\"\r\n                  >\r\n                    Editar\r\n        </button>\r\n          <button (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"btn btn-rounded btn-outline-dark btn-xs\" data-dismiss=\"modal\">\r\n            Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/formularios/form-regiones.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/formularios/form-regiones.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<ul class=\"alert alert-danger\" *ngIf=\"errores?.length>0\" >\r\n  <li  *ngFor=\"let err of errores\" >\r\n    {{err}}\r\n  </li>\r\n</ul>\r\n<div class=\"card bg-dark text-white\">\r\n<div class=\"card-header\">\r\n  <h4 class=\"card-title\">\r\n    <strong>\r\n      {{titulo}}:\r\n    </strong>\r\n  </h4>\r\n</div>\r\n<div class=\"card-body\">\r\n  <form #regionForm=\"ngForm\" >\r\n     <div class=\"form-group row\">\r\n      <label for=\"nombre\" class=\"col-form-label col-sm-2 \">Barrio </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control \"\r\n                [(ngModel)]=\"region.nombre\"\r\n                style=\"text-transform:uppercase;\"\r\n                placeholder=\"Dije Nombre del Barrio, Vereda y/o Corregimiento\"\r\n                id=\"nombre\"\r\n                name=\"nombre\"\r\n                minlength=\"3\"\r\n                maxlength=\"20\"\r\n                #nombre=\"ngModel\"\r\n                ng-model=\"nombre\"\r\n                requiered>\r\n                <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.required\" >\r\n                    Nombre es Requerido\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.minlength\" >\r\n                    Nombre debe contener minimo 3 caracteres\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.maxlength\" >\r\n                    Nombre debe contener maximo 20 caracteres\r\n                  </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-sm-6\">\r\n          <button class=\"btn btn-primary\"\r\n                  role=\"button\"\r\n                  (click)=\"create()\"\r\n                  *ngIf=\"!region.id else elseBlock\"\r\n                  [disabled]=\"!regionForm.form.valid\" >\r\n            Crear\r\n          </button>\r\n          <ng-template #elseBlock>\r\n              <button class=\"btn btn-primary\"\r\n                  role=\"button\"\r\n                  (click)=\"update()\"\r\n                  [disabled]=\"!regionForm.form.valid\">\r\n            Actualizar\r\n          </button>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/lista-regiones/regiones.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/lista-regiones/regiones.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n <app-detalle-region\r\n      *ngIf=\"regionSelecionado\"\r\n      [region]=\"regionSelecionado\">\r\n</app-detalle-region>\r\n<div class=\"card  mb-3\">\r\n  <div class=\"card-header bg-dark text-muted\"><h3><strong>{{titulo}}</strong></h3></div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado de Barrios</h4>\r\n    <div class=\"my-2 text-left\">\r\n      <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n              class=\"btn btn-rounded btn-outline-info btn-xs\"\r\n              type=\"button\"\r\n              [routerLink]=\"['/regiones/form']\"\r\n      >\r\n        Crear Barrio\r\n      </button>\r\n    </div>\r\n    <div class=\"alert alert-info\"\r\n        *ngIf=\"regiones?.length == 0\" >\r\n        <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n    </div>\r\n    <table class='table table-bordered table-striped'\r\n                  *ngIf=\"regiones?.length>0\" >\r\n      <thead class=\"bg-dark text-center text-white\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Nombre</th>\r\n          <th>Fec. Creacion</th>\r\n          <th >Editar</th>\r\n          <!-- <th >Eliminar</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let region of regiones\" >\r\n          <td style=\"width: 64px; cursor: pointer;\"\r\n          (click)=\"abrirModal(region)\"\r\n          >Ver</td>\r\n              <td>{{region.nombre}}</td>\r\n                  <td>{{region.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n                  <td>\r\n                    <button type=\"button\"\r\n                        class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n                        [routerLink]=\"['/regiones/form', region.id]\"\r\n                        >\r\n                      Editar\r\n                    </button>\r\n                  </td>\r\n                  <!-- <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                      <button type=\"button\"\r\n                          class=\"btn btn-outline-danger\"\r\n                          (click)=\"delete(region)\"\r\n                          >\r\n                        Eliminar\r\n                      </button>\r\n                  </td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n      [paginador]=\"paginador\"\r\n      [link]=\"link\"\r\n    >\r\n  </app-paginador>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/detalle-servicio/detalle-servicio.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/detalle-servicio/detalle-servicio.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalServicioService.modal\">\r\n  <div  style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">\r\n            <strong>\r\n              {{titulo}}\r\n            </strong>\r\n          </h4>\r\n          <button (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <ul *ngIf=\"servicio\"  class=\"list-group text-dark mb-1\">\r\n                  <!-- <li class=\"list-group-item active\">{{producto.categoria.nombre | uppercase}}</li> -->\r\n                  <!-- <li class=\"list-group-item \">{{producto.codigo}}</li> -->\r\n                  <li class=\"list-group-item\">\r\n                    <strong>Servicio: </strong>\r\n                    {{servicio.nombre | uppercase}}\r\n                  </li>\r\n                  <li class=\"list-group-item\">\r\n                      <strong>Descripcion: </strong>\r\n                    {{servicio.descripcion}}</li>\r\n                  <li *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                      class=\"list-group-item\">\r\n                      <strong>Costo Repuesto: </strong>\r\n                      {{formatNumber(servicio.costoRepuesto)}}</li>\r\n                  <li class=\"list-group-item\">\r\n                      <strong>Costo Servicio: </strong>\r\n                    {{formatNumber(servicio.costoServicio)}}\r\n                  </li>\r\n\r\n                  <li class=\"list-group-item\">\r\n                      <strong>Ult. Movimiento: </strong>\r\n                    {{servicio.createAt | date:\"fullDate\"}}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer mt-0\">\r\n          <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                          type=\"button\"\r\n                          class=\"btn btn-rounded btn-outline-secondary btn-xs mx-2\"\r\n                          [routerLink]=\"['/servicios/form', servicio.id]\"\r\n                    >\r\n                      Editar\r\n                    </button>\r\n          <button (click)=\"cerrarModal()\"\r\n            type=\"button\" class=\"btn btn-rounded btn-outline-dark btn-xs\"\r\n            data-dismiss=\"modal\">Cerrar\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalServicioBuscarService.modal\">\r\n  <app-detalle-servicio\r\n      *ngIf=\"servicioSelecionado\"\r\n      [servicio]=\"servicioSelecionado\"></app-detalle-servicio>\r\n  <div  style=\"display: block;\"\r\n      class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">{{titulo}}</h5>\r\n          <button\r\n            (click)=\"cerrarModalBusquedaServicio()\"\r\n            type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                <form #productoForm=\"ngForm\">\r\n                  <div class=\"form-group row example-form\">\r\n                          <div class=\"col-sm-12\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                              <input type=\"text\" placeholder=\"Digite Nombre Del Servicio\"\r\n                                      aria-label=\"Servicios\"\r\n                                      matInput [formControl]=\"autocompleteControl\"\r\n                                      [matAutocomplete]=\"auto\">\r\n                              <mat-autocomplete #auto=\"matAutocomplete\"\r\n                                      [displayWith]=\"mostrarNombre\"\r\n                                      (optionSelected)=\"seleccionarServicio($event)\">\r\n                                <mat-option *ngFor=\"let servicio of serviciosFiltrados | async\"\r\n                                          [value]=\"servicio\">\r\n                                          {{servicio.nombre}} \r\n                                </mat-option>\r\n                              </mat-autocomplete>\r\n                            </mat-form-field>\r\n                            <div class=\"alert alert-danger\"\r\n                                  *ngIf=\"autocompleteControl.invalid && productoForm.submitted\">\r\n                              Debe Agregar Producto\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <table class=\"table table-striped table-hover table-sm\" >\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Detalles</th>\r\n                          <th>Nombre</th>\r\n                          <th>Costo Repuesto</th>\r\n                          <th>Costo Servicio</th>\r\n                         </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr  *ngIf=\"servicio\" >\r\n                          <td>\r\n                            <img   (click)=\"abrirModal(servicio)\"\r\n                                src=\"http://localhost:8080/images/no-producto.png\"\r\n                            alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n                            style=\"width: 64px; cursor: pointer;\">\r\n                        </td>\r\n                          <td>{{servicio.nombre | uppercase}}</td>\r\n                          <td>{{formatNumber(servicio.costoRepuesto)}}</td>\r\n                          <td>{{formatNumber(servicio.costoServicio)}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n\r\n            <div class=\"col-sm-2\">\r\n              <button (click)=\"cerrarModalBusquedaServicio()\"\r\n                type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                Cerrar\r\n              </button>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/formularios/form-servicio.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/formularios/form-servicio.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<ul class=\"alert alert-danger\" *ngIf=\"errores?.length>0\" >\r\n  <li  *ngFor=\"let err of errores\" >\r\n    {{err}}\r\n  </li>\r\n</ul>\r\n<div class=\"card bg-dark text-white\">\r\n  <div class=\"card-header\">\r\n    <h4 class=\"card-title\">\r\n      <strong>\r\n        {{titulo}}:\r\n      </strong>\r\n    </h4>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form #servicioForm=\"ngForm\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"nombre\" class=\"col-form-label col-sm-2\">Nombre </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  [(ngModel)]=\"servicio.nombre\"\r\n                  name=\"nombre\"\r\n                  minlength=\"3\"\r\n                  maxlength=\"50\"\r\n                  #nombre=\"ngModel\"\r\n                  requiered>\r\n              <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\"\r\n                   class=\"alert alert-danger\">\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.required\" >\r\n                    Nombre es Requerido\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.minlength\" >\r\n                    Nombre debe contener minimo 3 caracteres\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.maxlength\" >\r\n                    Nombre debe contener maximo 50 caracteres\r\n                  </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"descripcion\" class=\"col-form-label col-sm-2\">Descripcion </label>\r\n        <div class=\"col-sm-6\">\r\n          <textarea class=\"form-control\"\r\n                    [(ngModel)]=\"servicio.descripcion\"\r\n                    name=\"descripcion\"\r\n                    >\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"costoRepuesto\" class=\"col-form-label col-sm-2\">Costo Repuesto:  $ </label>\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"number\"\r\n                class=\"form-control\"\r\n                  [(ngModel)]=\"servicio.costoRepuesto\"\r\n                  name=\"costoRepuesto\"\r\n                  minlength=\"1\"\r\n                  #costoRepuesto=\"ngModel\"\r\n                  requiered>\r\n                 <div class=\"alert alert-danger pt-2\" *ngIf=\"costoRepuesto.invalid \" >\r\n                    <div class=\"\" *ngIf=\"!!costoRepuesto?.errors.requiered\" >\r\n                      Costo Repuesto es Requerido\r\n                    </div>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"costoServicio\" class=\"col-form-label col-sm-2\">Costo Servicio:  $ </label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"number\"\r\n                  class=\"form-control\"\r\n                    [(ngModel)]=\"servicio.costoServicio\"\r\n                    name=\"costoServicio\"\r\n                    minlength=\"1\"\r\n                    #costoServicio=\"ngModel\"\r\n                    requiered>\r\n                    <div class=\"alert alert-danger pt-2\" *ngIf=\"costoServicio.invalid\" >\r\n                      <div class=\"\" *ngIf=\"costoServicio?.errors.requiered\" >\r\n                        Costo Servicio es Requerido\r\n                      </div>\r\n                  </div>\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-sm-6\">\r\n              <button class=\"btn btn-primary\"\r\n                      role=\"button\"\r\n                      (click)=\"create()\"\r\n                      *ngIf=\"!servicio.id else elseBlock\"\r\n                      [disabled]=\"!servicioForm.form.valid\">\r\n                Crear\r\n              </button>\r\n              <ng-template #elseBlock>\r\n                  <button class=\"btn btn-primary\"\r\n                      role=\"button\"\r\n                      (click)=\"update()\"\r\n                      [disabled]=\"!servicioForm.form.valid\">\r\n                Actualizar\r\n              </button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/lista-servicios/servicios.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/lista-servicios/servicios.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-servicio-buscar></app-servicio-buscar>\r\n<app-detalle-servicio\r\n      *ngIf=\"servicioSelecionado\"\r\n      [servicio]=\"servicioSelecionado\">\r\n</app-detalle-servicio>\r\n<div class=\"card bg-light mb-3\">\r\n  <div class=\"card-header\"><h3><strong>Servicios</strong></h3></div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado de Servicios</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <div class=\"my-2 text-left\">\r\n          <button class=\"btn btn-rounded btn-outline-primary btn-xs\"\r\n          type=\"button\"\r\n          (click)=\"abrirModalServicioBuscar()\"\r\n          >\r\n            Buscar Servicio\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"my-2 text-left\">\r\n          <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                class=\"btn btn-rounded btn-outline-info btn-xs\"\r\n                type=\"button\"\r\n                 [routerLink]=\"['/servicios/form']\"\r\n        >\r\n          Crear Servicios\r\n        </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n       <div class=\"alert alert-info\"\r\n        *ngIf=\"servicios?.length == 0\" >\r\n        <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n    </div>\r\n    <table class='table table-bordered table-striped'\r\n                    *ngIf=\"servicios?.length>0\" >\r\n      <thead class=\"bg-dark text-center text-white\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Nombre</th>\r\n          <th>Precio Repuesto</th>\r\n          <th>Precio Servicio</th>\r\n          <th>Descripcion</th>\r\n          <th>Fec. Ultimo Mov.</th>\r\n          <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Editar</th>\r\n          <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let servicio of servicios\" >\r\n            <td>\r\n                <img (click)=\"abrirModal(servicio)\"\r\n                    src=\"http://localhost:8080/images/no-producto.png\"\r\n                    alt=\"no-producto\" class=\"img-thumbnail rounded\"\r\n                    style=\"width: 64px; cursor: pointer;\">\r\n            </td>\r\n            <!-- <td>{{producto.codigo }}</td> -->\r\n          <td>{{servicio.nombre | uppercase}}</td>\r\n          <td >{{formatNumber(servicio.costoRepuesto)}}</td>\r\n          <td >{{formatNumber(servicio.costoServicio)}}</td>\r\n          <td>{{servicio.descripcion}}</td>\r\n          <td>{{servicio.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n          <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                        <button type=\"button\"\r\n                            class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n                            [routerLink]=\"['/servicios/form', servicio.id]\"\r\n                            >\r\n                          Editar\r\n                        </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n      [paginador]=\"paginador\"\r\n      [link]=\"link\">\r\n    </app-paginador>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/detalle-sucursal/detalle-sucursal.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/detalle-sucursal/detalle-sucursal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\"  *ngIf=\"modalSucursalService.modal\">\r\n    <div style=\"display: block;\"\r\n        class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-lg \" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header bg-dark text-muted\">\r\n            <h4 class=\"modal-title\">\r\n              <strong>\r\n                {{titulo}}\r\n              </strong>\r\n            </h4>\r\n            <button (click)=\"cerrarModal()\"\r\n              type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <ul *ngIf=\"sucursal\"  class=\"list-group text-dark mb-3\">\r\n                    <li class=\"list-group-item active bg-dark text-muted\">\r\n                      {{sucursal.nombre}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Nombre Sucursal: </strong>\r\n                      {{sucursal.sede}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Propietario: </strong>\r\n                      {{sucursal.propietario}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Nit: </strong>\r\n                      {{sucursal.nit}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Regimen: </strong>\r\n                      {{sucursal.regimen}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Ubicacion: </strong>\r\n                      {{sucursal.geoposicion}}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ul *ngIf=\"sucursal\"  class=\"list-group text-dark mb-3\">\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Direccion: </strong>\r\n                      {{sucursal.direccion}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Telefono: </strong>\r\n                      {{sucursal.telefono}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>WhatsApp: </strong>\r\n                      {{sucursal.celular1}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Celular: </strong>\r\n                      {{sucursal.celular2}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Facebook: </strong>\r\n                      {{sucursal.facebook}}\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                      <strong>Instagram: </strong>\r\n                      {{sucursal.instagram}}\r\n                    </li>\r\n                  </ul>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button\r\n                          type=\"button\"\r\n                          class=\"btn btn-rounded btn-outline-secondary btn-xs mx-2\"\r\n                          [routerLink]=\"['/sucursales/form', sucursal.id]\"\r\n                    >\r\n                      Editar\r\n          </button>\r\n            <button (click)=\"cerrarModal()\"\r\n              type=\"button\" class=\"btn btn-rounded btn-outline-dark btn-xs\" data-dismiss=\"modal\">\r\n              Close\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/formularios/form-sucursales.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/formularios/form-sucursales.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<ul class=\"alert alert-danger\" *ngIf=\"errores?.length>0\" >\r\n  <li  *ngFor=\"let err of errores\" >\r\n    {{err}}\r\n  </li>\r\n</ul>\r\n<div class=\"card bg-dark text-white\">\r\n<div class=\"card-header\">\r\n  <h4 class=\"card-title\">\r\n    <strong>\r\n      {{titulo}}:\r\n    </strong>\r\n  </h4>\r\n</div>\r\n<div class=\"card-body\">\r\n  <form #sucursalForm=\"ngForm\" >\r\n     <div class=\"form-group row\">\r\n      <label for=\"nombre\" class=\"col-form-label col-sm-2 \">Sede Sistema </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control \"\r\n                [(ngModel)]=\"sucursal.nombre\"\r\n                style=\"text-transform:uppercase;\"\r\n                placeholder=\"Digite Nombre de Sucursalpara el sistema\"\r\n                id=\"nombre\"\r\n                name=\"nombre\"\r\n                minlength=\"3\"\r\n                maxlength=\"20\"\r\n                #nombre=\"ngModel\"\r\n                ng-model=\"nombre\"\r\n                requiered>\r\n                <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.required\" >\r\n                    Nombre es Requerido\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.minlength\" >\r\n                    Nombre debe contener minimo 3 caracteres\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"nombre?.errors?.maxlength\" >\r\n                    Nombre debe contener maximo 20 caracteres\r\n                  </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"sede\" class=\"col-form-label col-sm-2 \">Nombre Sucursal </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control \"\r\n                [(ngModel)]=\"sucursal.sede\"\r\n                style=\"text-transform:uppercase;\"\r\n                placeholder=\"Digite Nombre de Sucursal\"\r\n                id=\"sede\"\r\n                name=\"sede\"\r\n                minlength=\"3\"\r\n                maxlength=\"50\"\r\n                #sede=\"ngModel\"\r\n                ng-model=\"sede\"\r\n                requiered>\r\n                <div *ngIf=\"sede.invalid && (sede.dirty || sede.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                  <div class=\"\" *ngIf=\"sede?.errors?.required\" >\r\n                    Nombre es Requerido\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"sede?.errors?.minlength\" >\r\n                    Nombre debe contener minimo 3 caracteres\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"sede?.errors?.maxlength\" >\r\n                    Nombre debe contener maximo 50 caracteres\r\n                  </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"propietario\" class=\"col-form-label col-sm-2 \">Nombre Propietario </label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"text\" class=\"form-control \"\r\n                [(ngModel)]=\"sucursal.propietario\"\r\n                style=\"text-transform:uppercase;\"\r\n                placeholder=\"Digite Nombre del Propietario\"\r\n                id=\"propietario\"\r\n                name=\"propietario\"\r\n                minlength=\"3\"\r\n                maxlength=\"50\"\r\n                #propietario=\"ngModel\"\r\n                ng-model=\"propietario\"\r\n                requiered>\r\n                <div *ngIf=\"propietario.invalid && (propietario.dirty || propietario.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                  <div class=\"\" *ngIf=\"propietario?.errors?.required\" >\r\n                    Nombre es Requerido\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"propietario?.errors?.minlength\" >\r\n                    Nombre debe contener minimo 3 caracteres\r\n                  </div>\r\n                  <div class=\"\" *ngIf=\"propietario?.errors?.maxlength\" >\r\n                    Nombre debe contener maximo 50 caracteres\r\n                  </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"nit\" class=\"col-form-label col-sm-2 \">Nit </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.nit\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Nit\"\r\n                  id=\"nit\"\r\n                  name=\"nit\"\r\n                  #nit=\"ngModel\"\r\n                  ng-model=\"nit\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"regimen\" class=\"col-form-label col-sm-2 \">Regimen </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.regimen\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Nit\"\r\n                  id=\"regimen\"\r\n                  name=\"regimen\"\r\n                  #regimen=\"ngModel\"\r\n                  ng-model=\"regimen\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"geoposicion\" class=\"col-form-label col-sm-2 \">Dpto/Pais Sede </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.geoposicion\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Departamento - Pais\"\r\n                  id=\"geoposicion\"\r\n                  name=\"geoposicion\"\r\n                  #geoposicion=\"ngModel\"\r\n                  ng-model=\"geoposicion\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"direccion\" class=\"col-form-label col-sm-2 \">Direccion </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.direccion\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Direccion\"\r\n                  id=\"direccion\"\r\n                  name=\"direccion\"\r\n                  #direccion=\"ngModel\"\r\n                  ng-model=\"direccion\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"telefono\" class=\"col-form-label col-sm-2 \">Telefono Fijo </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.telefono\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Numero telefono fijo\"\r\n                  id=\"telefono\"\r\n                  name=\"telefono\"\r\n                  #telefono=\"ngModel\"\r\n                  ng-model=\"telefono\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"celular1\" class=\"col-form-label col-sm-2 \">WhatsApp </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.celular1\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Numero telefono\"\r\n                  id=\"celular1\"\r\n                  name=\"celular1\"\r\n                  #celular1=\"ngModel\"\r\n                  ng-model=\"celular1\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"celular2\" class=\"col-form-label col-sm-2 \">Celular </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.celular2\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Numero Whatsapp\"\r\n                  id=\"celular2\"\r\n                  name=\"celular2\"\r\n                  #telefono=\"ngModel\"\r\n                  ng-model=\"celular2\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"facebook\" class=\"col-form-label col-sm-2 \">Facebook </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.facebook\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Numero Whatsapp\"\r\n                  id=\"facebook\"\r\n                  name=\"facebook\"\r\n                  #telefono=\"ngModel\"\r\n                  ng-model=\"facebook\"\r\n                  >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"instagram\" class=\"col-form-label col-sm-2 \">Instagram </label>\r\n        <div class=\"col-sm-6\">\r\n          <input type=\"text\" class=\"form-control \"\r\n                  [(ngModel)]=\"sucursal.instagram\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Numero Whatsapp\"\r\n                  id=\"instagram\"\r\n                  name=\"instagram\"\r\n                  #telefono=\"ngModel\"\r\n                  ng-model=\"instagram\"\r\n                  >\r\n        </div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-sm-6\">\r\n          <button class=\"btn btn-primary\"\r\n                  role=\"button\"\r\n                  (click)=\"create()\"\r\n                  *ngIf=\"!sucursal.id else elseBlock\"\r\n                  [disabled]=\"!sucursalForm.form.valid\" >\r\n            Crear\r\n          </button>\r\n          <ng-template #elseBlock>\r\n              <button class=\"btn btn-primary\"\r\n                  role=\"button\"\r\n                  (click)=\"update()\"\r\n                  [disabled]=\"!sucursalForm.form.valid\">\r\n            Actualizar\r\n          </button>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/lista-sucursales/lista-sucursales.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/lista-sucursales/lista-sucursales.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<app-detalle-sucursal\r\n*ngIf=\"sucursalSelecionado\"\r\n[sucursal]=\"sucursalSelecionado\">\r\n</app-detalle-sucursal>\r\n<div class=\"card  mb-3\">\r\n  <div class=\"card-header bg-dark text-muted\"><h3><strong>{{titulo}}</strong></h3></div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado de Sucursales</h4>\r\n    <div class=\"my-2 text-left\">\r\n      <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n              class=\"btn btn-rounded btn-outline-info btn-xs\"\r\n              type=\"button\"\r\n              [routerLink]=\"['/sucursales/form']\"\r\n      >\r\n        Crear Sucursal\r\n      </button>\r\n    </div>\r\n    <div class=\"alert alert-info\"\r\n        *ngIf=\"sucursales?.length == 0\" >\r\n        <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n    </div>\r\n    <table class='table table-bordered table-striped'\r\n                  *ngIf=\"sucursales?.length>0\" >\r\n      <thead class=\"bg-dark text-center text-white\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Nombre</th>\r\n          <th>Fec. Creacion</th>\r\n          <th >Editar</th>\r\n          <!-- <th >Eliminar</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let sucursal of sucursales\" >\r\n          <td style=\"width: 64px; cursor: pointer;\"\r\n                    (click)=\"abrirModal(sucursal)\">Ver</td>\r\n              <td>{{sucursal.nombre}}</td>\r\n                  <td>{{sucursal.createAt | date:'EEEE dd, MMMM yyyy'}}</td>\r\n                  <td>\r\n                    <button type=\"button\"\r\n                        class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n                        [routerLink]=\"['/sucursales/form', sucursal.id]\"\r\n                        >\r\n                      Editar\r\n                    </button>\r\n                  </td>\r\n                  <!-- <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                      <button type=\"button\"\r\n                          class=\"btn btn-outline-danger\"\r\n                          (click)=\"delete(region)\"\r\n                          >\r\n                        Eliminar\r\n                      </button>\r\n                  </td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n      [paginador]=\"paginador\"\r\n      [link]=\"link\"\r\n    >\r\n  </app-paginador>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/detalle-user/detalle-user.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/detalle-user/detalle-user.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"abrir-modal animacion fadeIn\" *ngIf=\"modalUserService.modal\">\r\n<div  style=\"display: block;\"\r\n    class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg \" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header bg-dark text-white-50\">\r\n          <h4 class=\"modal-title\">\r\n            <strong>\r\n              {{titulo}}\r\n            </strong>\r\n          </h4>\r\n        <button (click)=\"cerrarModal()\"\r\n          type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span class=\"text-white\" aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm\">\r\n              <ul *ngIf=\"user\"  class=\"list-group text-dark mb-1\">\r\n                  <li class=\"list-group-item active bg-dark text-muted\">\r\n                    <strong>Nick: </strong> {{user.username}}</li>\r\n                <li class=\"list-group-item \">\r\n                    <strong>Nombre: </strong>{{user.nombre | uppercase}}</li>\r\n                <li class=\"list-group-item\">\r\n                    <strong>Apellido: </strong>{{user.apellido | uppercase}}</li>\r\n                <li class=\"list-group-item\">\r\n                   <strong>Ubicación: </strong>{{user.region.nombre | uppercase}}</li>\r\n                <li class=\"list-group-item\">\r\n                  <strong>Email: </strong>{{user.email | uppercase}}</li>\r\n                <li class=\"list-group-item\">\r\n                  <strong>Fec. Nacimiento: </strong>{{user.fecha | date:\"fullDate\"}}</li>\r\n                <li class=\"list-group-item\">\r\n                  <strong>Fec. Creación: </strong>{{user.createAt | date:\"fullDate\"}}</li>\r\n\r\n              </ul>\r\n                <div class=\"input-group mb-1\">\r\n                    <div class=\"custom-file\">\r\n                      <input (change)=\"seleccionarFoto($event)\"\r\n                            type=\"file\" class=\"custom-file-input\"\r\n                            id=\"inputGroupFile04\" aria-describedby=\"inputGroupFileAddon04\">\r\n                      <label class=\"custom-file-label\" for=\"inputGroupFile04\">{{rutaFoto}}</label>\r\n                    </div>\r\n                    <div class=\"input-group-append\">\r\n                      <button (click)=\"subirFoto()\"\r\n                        [disabled]=\"!fotoSelecionada\"\r\n                        class=\"btn btn-outline-secondary\"\r\n                        type=\"button\" id=\"inputGroupFileAddon04\">Subir</button>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"progreso>0 \"  class=\"progress\" style=\"height: 40px;\">\r\n                      <div class=\"progress-bar progress-bar-striped\"\r\n                          role=\"progressbar\"\r\n                          [ngStyle]= \"{width: progreso+'%'}\"\r\n                          attr.aria-valuenow=\"{{progreso}}\" aria-valuemin=\"0\"\r\n                          aria-valuemax=\"100\">\r\n                          {{progreso}}%\r\n                      </div>\r\n                  </div>\r\n\r\n            </div>\r\n            <div class=\"col-sm\">\r\n              <img *ngIf=\"user?.foto\"  src=\"http://localhost:8080/api/uploads/imguser/{{user.foto}}\"\r\n                  alt=\"{{user.foto}}\" class=\"img-thumbnail rounded\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer mt-0 bg-light\">\r\n        <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                        type=\"button\"\r\n                        class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n                        [routerLink]=\"['/users/form', user.id]\"\r\n                  >\r\n                    Editar\r\n                  </button>\r\n        <button (click)=\"cerrarModal()\"\r\n                  type=\"button\" class=\"btn btn-rounded btn-outline-dark btn-xs\"\r\n                        data-dismiss=\"modal\">\r\n                  Cerrar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/formularios/form-user.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/formularios/form-user.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<ul class=\"alert alert-danger\" *ngIf=\"errores?.length>0\" >\r\n  <li  *ngFor=\"let err of errores\" >\r\n    {{err}}\r\n  </li>\r\n</ul>\r\n<div class=\"card bg-dark  text-white-50\">\r\n<div class=\"card-header\">\r\n  <h4 class=\"card-title\">\r\n    <strong>\r\n      {{titulo}}:\r\n    </strong>\r\n  </h4>\r\n</div>\r\n<div class=\"card-body\">\r\n  <div class=\"card-title my-3\">\r\n    <h4>\r\n      Los campos con (*) son requeridos.\r\n    </h4>\r\n  </div>\r\n  <form #userForm=\"ngForm\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"username\" class=\"col-form-label col-sm-4 text-right\">Nick (*) : </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\"\r\n                  class=\"form-control\"\r\n                    [(ngModel)]=\"user.username\"\r\n                      name=\"username\"\r\n                      placeholder=\"Digete Nick del Usuario\"\r\n                      minlength=\"4\"\r\n                      maxlength=\"15\"\r\n                      #username=\"ngModel\"\r\n                      requiered>\r\n                      <div class=\"alert alert-danger pt-2\" *ngIf=\"username.invalid &&\r\n                      (username.dirty || username.touched)\" >\r\n                        <div class=\"\" *ngIf=\"username?.errors.requiered\" >\r\n                          Nick es Requerido\r\n                        </div>\r\n                        <div class=\"\" *ngIf=\"username?.errors.minlength\" >\r\n                          Nick debe contener minimo 4 caracteres\r\n                        </div>\r\n                        <div class=\"\" *ngIf=\"username?.errors?.maxlength\" >\r\n                          Nombre debe contener maximo 15 caracteres\r\n                        </div>\r\n                    </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"password\" class=\"col-form-label col-sm-4 text-right\">Password (*) :</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"password\"\r\n                    class=\"form-control\"\r\n                    minlength=\"8\"\r\n                    maxlength=\"100\"\r\n                    [(ngModel)]=\"user.password\"\r\n                    placeholder=\"Digite una Contraseña de minimo 8 Caracteres\"\r\n                    name=\"password\"\r\n                    #password=\"ngModel\"\r\n                    requiered>\r\n                    <div class=\"alert alert-danger pt-2\" *ngIf=\"password.invalid &&\r\n                     (password.dirty || password.touched)\" >\r\n                      <div class=\"\" *ngIf=\"password?.errors.requiered\" >\r\n                        Password es Requerido\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"password?.errors.minlength\" >\r\n                        Password debe contener minimo 8 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"password?.errors.maxlength\" >\r\n                        Documento debe contener maximo 100 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"nombre\" class=\"col-form-label col-sm-4 text-right \">Nombre (*) : </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control \"\r\n                    style=\"text-transform:uppercase;\"\r\n                    [(ngModel)]=\"user.nombre\"\r\n                    placeholder=\"Digete Nombre(s) del Usuario, solo letras\"\r\n                    id=\"nombre\"\r\n                    name=\"nombre\"\r\n                    minlength=\"3\"\r\n                    maxlength=\"20\"\r\n                    #nombre=\"ngModel\"\r\n                    ng-model=\"nombre\"\r\n                    requiered>\r\n                    <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\"\r\n                            class=\"alert alert-danger\">\r\n                      <div class=\"\" *ngIf=\"nombre?.errors?.required\" >\r\n                        Nombre es Requerido\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"nombre?.errors?.minlength\" >\r\n                        Nombre(s) debe contener minimo 3 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"nombre?.errors?.maxlength\" >\r\n                        Nombre(s) debe contener maximo 20 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"apellido\" class=\"col-form-label col-sm-4 text-right\">Apellido (*) : </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\"\r\n                    class=\"form-control\"\r\n                    style=\"text-transform:uppercase;\"\r\n                    placeholder=\"Digete Apellido(s) del Usuario, solo letras\"\r\n                    [(ngModel)]=\"user.apellido\"\r\n                    name=\"apellido\"\r\n                    minlength=\"3\"\r\n                    maxlength=\"20\"\r\n                    #apellido=\"ngModel\"\r\n                    requiered>\r\n                    <div class=\"alert alert-danger pt-2\" *ngIf=\"apellido.invalid &&\r\n                     (apellido.dirty || apellido.touched)\" >\r\n                      <div class=\"\" *ngIf=\"apellido?.errors.requiered\" >\r\n                        Apellido es Requerido\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"apellido?.errors.minlength\" >\r\n                        Apellido debe contener minimo 3 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"apellido?.errors.maxlength\" >\r\n                        Apellido debe contener maximo 20 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"documento\" class=\"col-form-label col-sm-4 text-right\">Doc. Identidad (*) :</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.documento\"\r\n                  name=\"documento\"\r\n                  placeholder=\"Solo Numeros, No digite( . / * - # ,) \"\r\n                  minlength=\"8\"\r\n                  maxlength=\"10\"\r\n                  #documento=\"ngModel\"\r\n                  requiered>\r\n                  <div class=\"alert alert-danger pt-2\"\r\n                        *ngIf=\"documento.invalid && (documento.dirty || documento.touched)\" >\r\n                      <div class=\"\" *ngIf=\"documento?.errors.requiered\" >\r\n                        Documento es Requerido\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"documento?.errors.minlength\" >\r\n                        Documento debe contener minimo 8 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"documento?.errors.maxlength\" >\r\n                        Documento debe contener maximo 10 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"email\" class=\"col-form-label col-sm-4 text-right\">Email (*) :</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"email\"\r\n                  class=\"form-control\"\r\n                  style=\"text-transform:uppercase;\"\r\n                  placeholder=\"Digite Email \"\r\n                  [(ngModel)]=\"user.email\"\r\n                  name=\"email\"\r\n                    #email=\"ngModel\"\r\n                    >\r\n                    <div class=\"alert alert-danger pt-2\" *ngIf=\"email.invalid &&\r\n                      (email.dirty || email.touched)\" >\r\n                      <div class=\"\" *ngIf=\"email?.errors.email\" >\r\n                       Formato de Email Invalido\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"telefono\" class=\"col-form-label col-sm-4 text-right\">Telefono Fijo :</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"user.telefono\"\r\n                    placeholder=\"Digite un numero de telefono fijo \"\r\n                    name=\"telefono\"\r\n                    minlength=\"7\"\r\n                    maxlength=\"7\"\r\n                    #telefono=\"ngModel\"\r\n                    >\r\n                    <div class=\"alert alert-danger pt-2\" *ngIf=\"telefono.invalid &&\r\n                            (telefono.dirty || telefono.touched)\" >\r\n                      <div class=\"\" *ngIf=\"telefono?.errors.minlength\" >\r\n                        Telefono debe contener minimo 7 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"telefono?.errors.maxlength\" >\r\n                        Telefono debe contener maximo 7 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"celular1\" class=\"col-form-label col-sm-4 text-right\">Celular 1 (*) : </label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"user.celular1\"\r\n                    name=\"celular1\"\r\n                    minlength=\"10\"\r\n                    maxlength=\"10\"\r\n                    #celular1=\"ngModel\"\r\n                    placeholder=\"Digite un numero de Celular principal, Ej: 315..... \"\r\n                    requiered>\r\n                    <div class=\"alert alert-danger pt-2\"\r\n                        *ngIf=\"celular1.invalid && (celular1.dirty || celular1.touched)\" >\r\n                      <div class=\"\" *ngIf=\"celular1?.errors.requiered\" >\r\n                        Celular 1 es Requerido\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"celular1?.errors.minlength\" >\r\n                        Celular 1 debe contener minimo 10 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"celular1?.errors.maxlength\" >\r\n                        Celular 1 debe contener maximo 10 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"celular2\" class=\"col-form-label col-sm-4 text-right\">Celular 2 :</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"user.celular2\"\r\n                    name=\"celular2\"\r\n                    placeholder=\"Digite un numero de Celular Secundario (opciona), Ej: 301..... \"\r\n                    minlength=\"10\"\r\n                    maxlength=\"10\"\r\n                    #celular2=\"ngModel\">\r\n                    <div class=\"alert alert-danger pt-2\"\r\n                        *ngIf=\"celular2.invalid && (celular2.dirty || celular2.touched)\" >\r\n                      <div class=\"\" *ngIf=\"celular2?.errors.minlength\" >\r\n                        Celular 2 debe contener minimo 10 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"celular2?.errors.maxlength\" >\r\n                        Celular 2 debe contener maximo 10 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"direccion\" class=\"col-form-label col-sm-4 text-right\">Direccion :</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\"\r\n                    class=\"form-control\"\r\n                    style=\"text-transform:uppercase;\"\r\n                    [(ngModel)]=\"user.direccion\"\r\n                    name=\"direccion\"\r\n                    placeholder=\"Digite direccion de ubicacion, Ej: calle-5 av-10 # 4-25 \"\r\n                    minlength=\"3\"\r\n                    maxlength=\"50\"\r\n                    #direccion=\"ngModel\"\r\n                    requiered>\r\n                    <div class=\"alert alert-danger pt-2\"\r\n                      *ngIf=\"direccion.invalid && (direccion.dirty || direccion.touched)\" >\r\n                      <div class=\"\" *ngIf=\"direccion?.errors.requiered\" >\r\n                        Direccion es Requerido\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"direccion?.errors.minlength\" >\r\n                        Direccion debe contener minimo 3 caracteres\r\n                      </div>\r\n                      <div class=\"\" *ngIf=\"apellido?.errors.maxlength\" >\r\n                        Direccion debe contener direccion 50 caracteres\r\n                      </div>\r\n                  </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"region\" class=\"col-form-label col-sm-4 text-right\">Ubicacion (*) :</label>\r\n          <div class=\"col-sm-8\">\r\n              <select  class=\"form-control\"\r\n                        [compareWith]=\"compararRegion\"\r\n                        [(ngModel)]=\"user.region\" name=\"region\"\r\n                        style=\"width: 730px;\">\r\n                        <option\r\n                            [ngValue]=\"undefined\">\r\n                            --- Selecionar Ubicacion ---\r\n                        </option>\r\n                        <option *ngFor=\"let region of regiones\"\r\n                        [ngValue]=\"region\">{{region.nombre | uppercase}}</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"fecha\" class=\"col-form-label col-sm-4 text-right\">Fec. Nacimiento (*) :</label>\r\n          <div class=\"col-sm-8\">\r\n              <input [matDatepicker]=\"fecha\"\r\n                [min]=\"minDate\"\r\n                class=\"form-control\"\r\n                [max]=\"maxDate\"\r\n                [(ngModel)]=\"user.fecha\"\r\n                [ngModelOptions]=\"{standalone: true}\"\r\n                name=\"fecha\"\r\n                placeholder=\"Selecione su fecha de nacimiento\"\r\n                requiered\r\n                style=\"display:inline; width: 250px;\">\r\n               <mat-datepicker-toggle\r\n                matSuffix [for]=\"fecha\">\r\n                </mat-datepicker-toggle>\r\n              <mat-datepicker  #fecha></mat-datepicker>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-sm-6\">\r\n          <button class=\"btn btn-primary\"\r\n                  role=\"button\"\r\n                  (click)=\"create()\"\r\n                  *ngIf=\"!user.id else elseBlock\"\r\n                  [disabled]=\"!userForm.form.valid\" >\r\n            Crear\r\n          </button>\r\n          <ng-template #elseBlock>\r\n              <button class=\"btn btn-primary\"\r\n                  role=\"button\"\r\n                  (click)=\"update()\"\r\n                  [disabled]=\"!userForm.form.valid\">\r\n            Actualizar\r\n          </button>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/lista-users/users.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/lista-users/users.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<app-detalle-user\r\n      *ngIf=\"userSelecionado\"\r\n      [user]=\"userSelecionado\"></app-detalle-user>\r\n<div class=\"card  mb-3\">\r\n  <div class=\"card-header bg-dark text-muted\"><h3><strong>{{titulo}}</strong></h3></div>\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-muted\">Listado Usuarios</h4>\r\n    <!-- <div class=\"my-2 text-left\">\r\n        <button *ngIf=\"authService.hasRole('ROLE_ADMIN')\"\r\n                class=\"btn btn-rounded btn-outline-primary\"\r\n                type=\"button\"\r\n                [routerLink]=\"['/users/form']\"\r\n        >\r\n          Crear Usuarios\r\n        </button>\r\n      </div> -->\r\n      <div class=\"alert alert-info\"\r\n        *ngIf=\"users?.length == 0\" >\r\n        <span class=\"text-muted\"><strong>No hay registros en la Base de Datos</strong></span>\r\n    </div>\r\n    <table class='table table-bordered table-striped'\r\n                 *ngIf=\"users?.length>0\" >\r\n      <thead class=\"bg-dark text-center text-white\">\r\n        <tr>\r\n          <th>Detalles</th>\r\n          <th>Nick</th>\r\n          <th>Rol</th>\r\n          <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Editar</th>\r\n          <!-- <th *ngIf=\"authService.hasRole('ROLE_ADMIN')\">Eliminar</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let user of users\" >\r\n          <td>\r\n              <img *ngIf=\"user?.foto\"  (click)=\"abrirModal(user)\"\r\n                  src=\"http://localhost:8080/api/uploads/imguser/{{user.foto}}\"\r\n                  alt=\"{{user.foto}}\" class=\"img-thumbnail rounded\"\r\n                  style=\"width: 64px; cursor: pointer;\">\r\n              <img *ngIf=\"!user?.foto\"  (click)=\"abrirModal(user)\"\r\n                  src=\"http://localhost:8080/images/no-usuario.png\"\r\n                  alt=\"no-usuario\" class=\"img-thumbnail rounded\"\r\n                  style=\"width: 64px; cursor: pointer;\">\r\n          </td>\r\n\r\n          <td>{{user.username | uppercase}}</td>\r\n\r\n          <td>{{tipoUsuarios(user.roles.length)}}</td>\r\n          <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n                <button type=\"button\"\r\n                            class=\"btn btn-rounded btn-outline-secondary btn-xs\"\r\n                            [routerLink]=\"['/users/form', user.id]\"\r\n                            >\r\n                          Editar\r\n                </button>\r\n          </td>\r\n          <!-- <td *ngIf=\"authService.hasRole('ROLE_ADMIN')\">\r\n              <button type=\"button\"\r\n                            class=\"btn btn-outline-danger\"\r\n                            (click)=\"delete(user)\"\r\n                            >\r\n                          Eliminar\r\n              </button>\r\n          </td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <app-paginador *ngIf=\"paginador\"\r\n      [paginador]=\"paginador\"\r\n      [link]=\"link\">\r\n    </app-paginador>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading *ngIf=\"loadingService.modal\"></app-loading>\r\n<div class=\"card border-primary text-center\">\r\n  <div class=\"card-header\">\r\n    <h2>\r\n      <strong>\r\n        Sistema - Inventarios - Facturacion - Informes\r\n      </strong>\r\n    </h2>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card-body\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n        <form method=\"post\">\r\n          <div class=\"form-group col-sm-12\">\r\n            <input [(ngModel)]=\"usuario.username\" type=\"text\" class=\"form-control\"\r\n            name=\"username\" id=\"username\" placeholder=\"Username\" autofocus required>\r\n          </div>\r\n         \r\n          <div class=\"form-group col-sm-12\">\r\n            <input [(ngModel)]=\"usuario.password\" type=\"password\" class=\"form-control\"\r\n            name=\"password\" id=\"password\" placeholder=\"Password\" required>\r\n          </div>\r\n          <div class=\"form-group col-sm-12\">\r\n            <label for=\"form-control\">Selecione sucursal</label>\r\n            <select   [ngModelOptions]=\"{standalone: true}\"\r\n                       name=\"myselect\"\r\n                    class=\"form-control\" [(ngModel)]=\"opcionSeleccionado\" (change)=\"capturar()\">\r\n                      <option *ngFor=\"let sucursal of sucursales\"\r\n                      [ngValue]=\"sucursal\">{{sucursal.nombre | uppercase}}</option>\r\n          </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-12\">\r\n            <input (click)='login()' type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Login\">\r\n          </div>\r\n         \r\n        </form>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 my-3\">\r\n        <img    src=\"http://localhost:8080/images/logo.jpg\"\r\n                alt=\"sin-foto\" class=\"img-thumbnail rounded\"\r\n                style=\"width: 45%; cursor: pointer;\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _clientes_lista_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clientes/lista-clientes/clientes.component */ "./src/app/clientes/lista-clientes/clientes.component.ts");
/* harmony import */ var _clientes_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clientes/services/cliente.service */ "./src/app/clientes/services/cliente.service.ts");
/* harmony import */ var _categorias_services_categoria_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categorias/services/categoria.service */ "./src/app/categorias/services/categoria.service.ts");
/* harmony import */ var _servicios_services_servicio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/services/servicio.service */ "./src/app/servicios/services/servicio.service.ts");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _productos_services_producto_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productos/services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var _regiones_services_region_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./regiones/services/region.service */ "./src/app/regiones/services/region.service.ts");
/* harmony import */ var _sucursales_services_sucursal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sucursales/services/sucursal.service */ "./src/app/sucursales/services/sucursal.service.ts");
/* harmony import */ var _users_lista_users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/lista-users/users.component */ "./src/app/users/lista-users/users.component.ts");
/* harmony import */ var _productos_lista_productos_productos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./productos/lista-productos/productos.component */ "./src/app/productos/lista-productos/productos.component.ts");
/* harmony import */ var _clientes_formularios_form_cliente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clientes/formularios/form-cliente.component */ "./src/app/clientes/formularios/form-cliente.component.ts");
/* harmony import */ var _users_formularios_form_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/formularios/form-user.component */ "./src/app/users/formularios/form-user.component.ts");
/* harmony import */ var _productos_formularios_form_producto_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./productos/formularios/form-producto.component */ "./src/app/productos/formularios/form-producto.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _users_detalle_user_detalle_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./users/detalle-user/detalle-user.component */ "./src/app/users/detalle-user/detalle-user.component.ts");
/* harmony import */ var _productos_detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./productos/detalle-producto/detalle-producto.component */ "./src/app/productos/detalle-producto/detalle-producto.component.ts");
/* harmony import */ var _clientes_detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clientes/detalle-cliente/detalle-cliente.component */ "./src/app/clientes/detalle-cliente/detalle-cliente.component.ts");
/* harmony import */ var _regiones_lista_regiones_regiones_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./regiones/lista-regiones/regiones.component */ "./src/app/regiones/lista-regiones/regiones.component.ts");
/* harmony import */ var _regiones_formularios_form_regiones_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./regiones/formularios/form-regiones.component */ "./src/app/regiones/formularios/form-regiones.component.ts");
/* harmony import */ var _regiones_detalle_region_detalle_region_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./regiones/detalle-region/detalle-region.component */ "./src/app/regiones/detalle-region/detalle-region.component.ts");
/* harmony import */ var _categorias_listado_regiones_categorias_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./categorias/listado-regiones/categorias.component */ "./src/app/categorias/listado-regiones/categorias.component.ts");
/* harmony import */ var _categorias_formularios_form_categorias_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./categorias/formularios/form-categorias.component */ "./src/app/categorias/formularios/form-categorias.component.ts");
/* harmony import */ var _categorias_detalle_categoria_detalle_categoria_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./categorias/detalle-categoria/detalle-categoria.component */ "./src/app/categorias/detalle-categoria/detalle-categoria.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./users/guards/auth.guard */ "./src/app/users/guards/auth.guard.ts");
/* harmony import */ var _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./users/guards/role.guard */ "./src/app/users/guards/role.guard.ts");
/* harmony import */ var _users_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./users/interceptors/token.interceptor */ "./src/app/users/interceptors/token.interceptor.ts");
/* harmony import */ var _users_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./users/interceptors/auth.interceptor */ "./src/app/users/interceptors/auth.interceptor.ts");
/* harmony import */ var _facturas_detalle_factura_detalle_factura_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./facturas/detalle-factura/detalle-factura.component */ "./src/app/facturas/detalle-factura/detalle-factura.component.ts");
/* harmony import */ var _facturas_facturacion_facturas_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./facturas/facturacion/facturas.component */ "./src/app/facturas/facturacion/facturas.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _facturas_lista_facturas_lista_facturas_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./facturas/lista-facturas/lista-facturas.component */ "./src/app/facturas/lista-facturas/lista-facturas.component.ts");
/* harmony import */ var _facturas_cliente_facturar_cliente_facturar_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./facturas/cliente-facturar/cliente-facturar.component */ "./src/app/facturas/cliente-facturar/cliente-facturar.component.ts");
/* harmony import */ var _productos_producto_buscar_producto_buscar_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./productos/producto-buscar/producto-buscar.component */ "./src/app/productos/producto-buscar/producto-buscar.component.ts");
/* harmony import */ var _facturas_buscar_factura_numero_factura_buscar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./facturas/buscar-factura-numero/factura-buscar.component */ "./src/app/facturas/buscar-factura-numero/factura-buscar.component.ts");
/* harmony import */ var _facturas_buscar_por_rango_fecha_filtrar_facturas_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./facturas/buscar-por-rango-fecha/filtrar-facturas.component */ "./src/app/facturas/buscar-por-rango-fecha/filtrar-facturas.component.ts");
/* harmony import */ var _servicios_lista_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./servicios/lista-servicios/servicios.component */ "./src/app/servicios/lista-servicios/servicios.component.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _servicios_detalle_servicio_detalle_servicio_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./servicios/detalle-servicio/detalle-servicio.component */ "./src/app/servicios/detalle-servicio/detalle-servicio.component.ts");
/* harmony import */ var _servicios_detalle_servicio_servicio_buscar_servicio_buscar_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./servicios/detalle-servicio/servicio-buscar/servicio-buscar.component */ "./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.ts");
/* harmony import */ var _servicios_formularios_form_servicio_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./servicios/formularios/form-servicio.component */ "./src/app/servicios/formularios/form-servicio.component.ts");
/* harmony import */ var _generales_paginador_paginador_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./generales/paginador/paginador.component */ "./src/app/generales/paginador/paginador.component.ts");
/* harmony import */ var _generales_loading_loading_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./generales/loading/loading.component */ "./src/app/generales/loading/loading.component.ts");
/* harmony import */ var _generales_pagina404_pagina404_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./generales/pagina404/pagina404.component */ "./src/app/generales/pagina404/pagina404.component.ts");
/* harmony import */ var _sucursales_lista_sucursales_lista_sucursales_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./sucursales/lista-sucursales/lista-sucursales.component */ "./src/app/sucursales/lista-sucursales/lista-sucursales.component.ts");
/* harmony import */ var _sucursales_detalle_sucursal_detalle_sucursal_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./sucursales/detalle-sucursal/detalle-sucursal.component */ "./src/app/sucursales/detalle-sucursal/detalle-sucursal.component.ts");
/* harmony import */ var _sucursales_formularios_form_sucursales_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./sucursales/formularios/form-sucursales.component */ "./src/app/sucursales/formularios/form-sucursales.component.ts");
































































Object(_angular_common__WEBPACK_IMPORTED_MODULE_22__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_54___default.a, 'es');
const routes = [
    { path: '', redirectTo: '/clientes', pathMatch: 'full' },
    { path: 'login', component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"] },
    { path: 'clientes', component: _clientes_lista_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_9__["ClientesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'clientes/details/:id', component: _clientes_detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_26__["DetalleClienteComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'clientes/page/:page', component: _clientes_lista_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_9__["ClientesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'clientes/form', component: _clientes_formularios_form_cliente_component__WEBPACK_IMPORTED_MODULE_19__["FormClienteComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'clientes/form/:id', component: _clientes_formularios_form_cliente_component__WEBPACK_IMPORTED_MODULE_19__["FormClienteComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'productos', component: _productos_lista_productos_productos_component__WEBPACK_IMPORTED_MODULE_18__["ProductosComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'productos/page/:page', component: _productos_lista_productos_productos_component__WEBPACK_IMPORTED_MODULE_18__["ProductosComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'productos/detalle/:id', component: _productos_detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_25__["DetalleProductoComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'productos/form', component: _productos_formularios_form_producto_component__WEBPACK_IMPORTED_MODULE_21__["FormProductoComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'productos/form/:id', component: _productos_formularios_form_producto_component__WEBPACK_IMPORTED_MODULE_21__["FormProductoComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'servicios', component: _servicios_lista_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_53__["ServiciosComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'servicios/page/:page', component: _servicios_lista_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_53__["ServiciosComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'servicios/form', component: _servicios_formularios_form_servicio_component__WEBPACK_IMPORTED_MODULE_57__["FormServicioComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'servicios/form/:id', component: _servicios_formularios_form_servicio_component__WEBPACK_IMPORTED_MODULE_57__["FormServicioComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'users', component: _users_lista_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'users/page/:page', component: _users_lista_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'users/form', component: _users_formularios_form_user_component__WEBPACK_IMPORTED_MODULE_20__["FormUserComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'users/form/:id', component: _users_formularios_form_user_component__WEBPACK_IMPORTED_MODULE_20__["FormUserComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'regiones', component: _regiones_lista_regiones_regiones_component__WEBPACK_IMPORTED_MODULE_27__["RegionesComponent"] },
    { path: 'regiones/page/:page', component: _regiones_lista_regiones_regiones_component__WEBPACK_IMPORTED_MODULE_27__["RegionesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'regiones/form', component: _regiones_formularios_form_regiones_component__WEBPACK_IMPORTED_MODULE_28__["FormRegionesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'regiones/form/:id', component: _regiones_formularios_form_regiones_component__WEBPACK_IMPORTED_MODULE_28__["FormRegionesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'categorias', component: _categorias_listado_regiones_categorias_component__WEBPACK_IMPORTED_MODULE_30__["CategoriasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'categorias/page/:page', component: _categorias_listado_regiones_categorias_component__WEBPACK_IMPORTED_MODULE_30__["CategoriasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'categorias/form', component: _categorias_formularios_form_categorias_component__WEBPACK_IMPORTED_MODULE_31__["FormCategoriasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'categorias/form/:id', component: _categorias_formularios_form_categorias_component__WEBPACK_IMPORTED_MODULE_31__["FormCategoriasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'facturas', component: _facturas_lista_facturas_lista_facturas_component__WEBPACK_IMPORTED_MODULE_48__["ListaFacturasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'facturas/page/:page', component: _facturas_lista_facturas_lista_facturas_component__WEBPACK_IMPORTED_MODULE_48__["ListaFacturasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'facturas/form/:clienteId', component: _facturas_facturacion_facturas_component__WEBPACK_IMPORTED_MODULE_39__["FacturasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'facturas/:id', component: _facturas_detalle_factura_detalle_factura_component__WEBPACK_IMPORTED_MODULE_38__["DetalleFacturaComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'factura/filtrar', component: _facturas_buscar_por_rango_fecha_filtrar_facturas_component__WEBPACK_IMPORTED_MODULE_52__["FiltrarFacturasComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'sucursales', component: _sucursales_lista_sucursales_lista_sucursales_component__WEBPACK_IMPORTED_MODULE_61__["ListaSucursalesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'sucursales/page/:page', component: _sucursales_lista_sucursales_lista_sucursales_component__WEBPACK_IMPORTED_MODULE_61__["ListaSucursalesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_USER' } },
    { path: 'sucursales/form', component: _sucursales_formularios_form_sucursales_component__WEBPACK_IMPORTED_MODULE_63__["FormSucursalesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: 'sucursales/form/:id', component: _sucursales_formularios_form_sucursales_component__WEBPACK_IMPORTED_MODULE_63__["FormSucursalesComponent"], canActivate: [_users_guards_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _users_guards_role_guard__WEBPACK_IMPORTED_MODULE_35__["RoleGuard"]], data: { role: 'ROLE_ADMIN' } },
    { path: '**', component: _generales_pagina404_pagina404_component__WEBPACK_IMPORTED_MODULE_60__["Pagina404Component"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _clientes_lista_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_9__["ClientesComponent"],
            _users_lista_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
            _productos_lista_productos_productos_component__WEBPACK_IMPORTED_MODULE_18__["ProductosComponent"],
            _clientes_formularios_form_cliente_component__WEBPACK_IMPORTED_MODULE_19__["FormClienteComponent"],
            _users_formularios_form_user_component__WEBPACK_IMPORTED_MODULE_20__["FormUserComponent"],
            _productos_formularios_form_producto_component__WEBPACK_IMPORTED_MODULE_21__["FormProductoComponent"],
            _users_detalle_user_detalle_user_component__WEBPACK_IMPORTED_MODULE_24__["DetalleUserComponent"],
            _productos_detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_25__["DetalleProductoComponent"],
            _clientes_detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_26__["DetalleClienteComponent"],
            _regiones_lista_regiones_regiones_component__WEBPACK_IMPORTED_MODULE_27__["RegionesComponent"],
            _regiones_formularios_form_regiones_component__WEBPACK_IMPORTED_MODULE_28__["FormRegionesComponent"],
            _regiones_detalle_region_detalle_region_component__WEBPACK_IMPORTED_MODULE_29__["DetalleRegionComponent"],
            _categorias_listado_regiones_categorias_component__WEBPACK_IMPORTED_MODULE_30__["CategoriasComponent"],
            _categorias_formularios_form_categorias_component__WEBPACK_IMPORTED_MODULE_31__["FormCategoriasComponent"],
            _categorias_detalle_categoria_detalle_categoria_component__WEBPACK_IMPORTED_MODULE_32__["DetalleCategoriaComponent"],
            _categorias_detalle_categoria_detalle_categoria_component__WEBPACK_IMPORTED_MODULE_32__["DetalleCategoriaComponent"],
            _users_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
            _facturas_detalle_factura_detalle_factura_component__WEBPACK_IMPORTED_MODULE_38__["DetalleFacturaComponent"],
            _facturas_facturacion_facturas_component__WEBPACK_IMPORTED_MODULE_39__["FacturasComponent"],
            _facturas_lista_facturas_lista_facturas_component__WEBPACK_IMPORTED_MODULE_48__["ListaFacturasComponent"],
            _facturas_cliente_facturar_cliente_facturar_component__WEBPACK_IMPORTED_MODULE_49__["ClienteFacturarComponent"],
            _productos_producto_buscar_producto_buscar_component__WEBPACK_IMPORTED_MODULE_50__["ProductoBuscarComponent"],
            _facturas_buscar_factura_numero_factura_buscar_component__WEBPACK_IMPORTED_MODULE_51__["FacturaBuscarComponent"],
            _facturas_buscar_por_rango_fecha_filtrar_facturas_component__WEBPACK_IMPORTED_MODULE_52__["FiltrarFacturasComponent"],
            _servicios_lista_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_53__["ServiciosComponent"],
            _servicios_detalle_servicio_detalle_servicio_component__WEBPACK_IMPORTED_MODULE_55__["DetalleServicioComponent"],
            _servicios_detalle_servicio_servicio_buscar_servicio_buscar_component__WEBPACK_IMPORTED_MODULE_56__["ServicioBuscarComponent"],
            _servicios_formularios_form_servicio_component__WEBPACK_IMPORTED_MODULE_57__["FormServicioComponent"],
            _generales_paginador_paginador_component__WEBPACK_IMPORTED_MODULE_58__["PaginadorComponent"],
            _generales_loading_loading_component__WEBPACK_IMPORTED_MODULE_59__["LoadingComponent"],
            _generales_pagina404_pagina404_component__WEBPACK_IMPORTED_MODULE_60__["Pagina404Component"],
            _sucursales_lista_sucursales_lista_sucursales_component__WEBPACK_IMPORTED_MODULE_61__["ListaSucursalesComponent"],
            _sucursales_detalle_sucursal_detalle_sucursal_component__WEBPACK_IMPORTED_MODULE_62__["DetalleSucursalComponent"],
            _sucursales_formularios_form_sucursales_component__WEBPACK_IMPORTED_MODULE_63__["FormSucursalesComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatNativeDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_46__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_47__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_43__["MatCardModule"]
        ],
        providers: [_clientes_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__["ClienteService"],
            _users_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _productos_services_producto_service__WEBPACK_IMPORTED_MODULE_14__["ProductoService"],
            _regiones_services_region_service__WEBPACK_IMPORTED_MODULE_15__["RegionService"],
            _categorias_services_categoria_service__WEBPACK_IMPORTED_MODULE_11__["CategoriaService"],
            _servicios_services_servicio_service__WEBPACK_IMPORTED_MODULE_12__["ServicioService"],
            _sucursales_services_sucursal_service__WEBPACK_IMPORTED_MODULE_16__["SucursalService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'es' },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _users_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_36__["TokenInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _users_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_37__["AuthInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/categorias/detalle-categoria/detalle-categoria.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/categorias/detalle-categoria/detalle-categoria.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetalleCategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCategoriaComponent", function() { return DetalleCategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categoria.service */ "./src/app/categorias/services/categoria.service.ts");
/* harmony import */ var _services_modal_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal-categoria.service */ "./src/app/categorias/services/modal-categoria.service.ts");




let DetalleCategoriaComponent = class DetalleCategoriaComponent {
    constructor(categoriaService, modalCategoriaService) {
        this.categoriaService = categoriaService;
        this.modalCategoriaService = modalCategoriaService;
        this.titulo = 'Detalle Categoria';
        this.progreso = 0;
    }
    cerrarModal() {
        this.modalCategoriaService.cerrarModal();
        this.fotoSelecionada = null;
        this.progreso = 0;
    }
};
DetalleCategoriaComponent.ctorParameters = () => [
    { type: _services_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"] },
    { type: _services_modal_categoria_service__WEBPACK_IMPORTED_MODULE_3__["ModalCategoriaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetalleCategoriaComponent.prototype, "categoria", void 0);
DetalleCategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-categoria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-categoria.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/detalle-categoria/detalle-categoria.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], DetalleCategoriaComponent);



/***/ }),

/***/ "./src/app/categorias/formularios/form-categorias.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categorias/formularios/form-categorias.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormCategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCategoriasComponent", function() { return FormCategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_categoria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/categoria */ "./src/app/categorias/interfaces/categoria.ts");
/* harmony import */ var _services_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/categoria.service */ "./src/app/categorias/services/categoria.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let FormCategoriasComponent = class FormCategoriasComponent {
    constructor(categoriaService, router, activatedRoute) {
        this.categoriaService = categoriaService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categoria = new _interfaces_categoria__WEBPACK_IMPORTED_MODULE_2__["Categoria"]();
        this.titulo = 'Crear Categoria';
    }
    ngOnInit() {
        this.cargarCategoria();
    }
    cargarCategoria() {
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.categoriaService.getCategoria(id).subscribe((categoria) => this.categoria = categoria);
            }
        });
    }
    create() {
        this.categoriaService.create(this.categoria).subscribe(categoria => {
            this.router.navigate(['/categorias']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Nueva Categoria',
                    text: `${categoria.nombre}, creado con Exito!`,
                    footer: '',
                });
        }, err => {
            this.errores = err.error.errors;
        });
    }
    update() {
        this.categoriaService.update(this.categoria)
            .subscribe(categoria => {
            this.router.navigate(['/categorias']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Categoria',
                    text: `${categoria.nombre}, Actualizada con Exito!`,
                    footer: '',
                });
        }, err => {
            this.errores = err.error.errors;
        });
    }
};
FormCategoriasComponent.ctorParameters = () => [
    { type: _services_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FormCategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-categorias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-categorias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/formularios/form-categorias.component.html")).default
    })
], FormCategoriasComponent);



/***/ }),

/***/ "./src/app/categorias/interfaces/categoria.ts":
/*!****************************************************!*\
  !*** ./src/app/categorias/interfaces/categoria.ts ***!
  \****************************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Categoria {
}


/***/ }),

/***/ "./src/app/categorias/listado-regiones/categorias.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categorias/listado-regiones/categorias.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categoria.service */ "./src/app/categorias/services/categoria.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/modal-categoria.service */ "./src/app/categorias/services/modal-categoria.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");








let CategoriasComponent = class CategoriasComponent {
    constructor(categoriaService, modalCategoriaService, activatedRoute, authService) {
        this.categoriaService = categoriaService;
        this.modalCategoriaService = modalCategoriaService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.link = '/clientes/page';
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.categoriaService.getCategorias(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
                // console.log('CategoriaComponent: tap 3');
                response.content.forEach(categoria => {
                    //  console.log(categoria.nombre);
                });
            })).subscribe(response => {
                this.categorias = response.content;
                this.paginador = response;
            });
        });
    }
    delete(categoria) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar La Categoria ${categoria.nombre} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Categoria!'
        }).then((result) => {
            if (result.value) {
                this.categoriaService.delete(categoria.id).subscribe(response => {
                    this.categorias = this.categorias.filter(cli => cli !== categoria);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Borrado!', `Categoria ${categoria.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModal(categoria) {
        this.categoriaSelecionado = categoria;
        this.modalCategoriaService.abrirModal();
    }
};
CategoriasComponent.ctorParameters = () => [
    { type: _services_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"] },
    { type: _services_modal_categoria_service__WEBPACK_IMPORTED_MODULE_6__["ModalCategoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
CategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/listado-regiones/categorias.component.html")).default
    })
], CategoriasComponent);



/***/ }),

/***/ "./src/app/categorias/services/categoria.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/categorias/services/categoria.service.ts ***!
  \**********************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CategoriaService = class CategoriaService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/categorias`;
    }
    getCategorias(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('CategoriaService: tap 1');
            response.content.forEach(categoria => {
                // console.log(categoria.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(categoria => {
                categoria.nombre = categoria.nombre.toUpperCase();
                return categoria;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            // console.log('CategoriaService: tap2');
            response.content.forEach(categoria => {
                //  console.log(categoria.nombre);
            });
        }));
    }
    getCategoriaLista() {
        return this.http.get(this.urlEndPoint);
    }
    create(categoria) {
        return this.http.post(this.urlEndPoint, categoria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.categoria), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getCategoria(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/categorias']);
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(categoria) {
        return this.http.put(`${this.urlEndPoint}/${categoria.id}`, categoria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.categoria), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.Categoria), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
};
CategoriaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
CategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CategoriaService);



/***/ }),

/***/ "./src/app/categorias/services/modal-categoria.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/categorias/services/modal-categoria.service.ts ***!
  \****************************************************************/
/*! exports provided: ModalCategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCategoriaService", function() { return ModalCategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalCategoriaService = class ModalCategoriaService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalCategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalCategoriaService);



/***/ }),

/***/ "./src/app/clientes/detalle-cliente/detalle-cliente.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/clientes/detalle-cliente/detalle-cliente.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetalleClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClienteComponent", function() { return DetalleClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cliente.service */ "./src/app/clientes/services/cliente.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_modal_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/modal-cliente.service */ "./src/app/clientes/services/modal-cliente.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _facturas_services_factura_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../facturas/services/factura.service */ "./src/app/facturas/services/factura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");











let DetalleClienteComponent = class DetalleClienteComponent {
    constructor(clienteService, funcionesService, modalClienteService, authService, facturaService, activatedRoute, loadingService) {
        this.clienteService = clienteService;
        this.funcionesService = funcionesService;
        this.modalClienteService = modalClienteService;
        this.authService = authService;
        this.facturaService = facturaService;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.titulo = 'Detalle Cliente';
        this.progreso = 0;
        this.rutaFoto = 'Selecionar Foto';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe(params => {
            const id = +params.get('id');
            this.clienteService.getCliente(id)
                .subscribe(cliente => {
                this.cliente = cliente,
                    console.log('formato cliente');
                console.log(cliente);
                this.loadingService.cerrarModal();
            });
        });
    }
    seleccionarFoto(event) {
        this.fotoSelecionada = event.target.files[0];
        this.progreso = 0;
        if (this.fotoSelecionada.type.indexOf('image') < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Error al Subir Selecionar Imagen',
                text: `El archivo debe ser del tipo 'Imagen'`,
                footer: 'Intente de nuevo',
            });
            this.fotoSelecionada = null;
        }
        else {
            this.rutaFoto = this.fotoSelecionada.name;
        }
    }
    subirFoto() {
        if (!this.fotoSelecionada) {
            this.rutaFoto = 'Selecionar Foto';
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Error al Subir Imagen',
                text: `No ha selecionado una imagen`,
                footer: 'Intente de nuevo',
            });
        }
        else {
            this.clienteService.subirFoto(this.fotoSelecionada, this.cliente.id)
                .subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                    this.progreso = Math.round((event.loaded / event.total) * 100);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                    const response = event.body;
                    this.cliente = response.cliente;
                    this.modalClienteService.notificarUpload.emit(this.cliente);
                    this.rutaFoto = 'Selecionar Foto';
                    this.fotoSelecionada = null;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        type: 'success',
                        title: 'La Foto se ha subido con Exito!',
                        text: response.mensaje,
                        footer: '',
                    });
                    // pendiente meter un time out
                    this.progreso = 0;
                }
            });
        }
    }
    delete(factura) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar la Factura ${factura.descripcion} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Factura!'
        }).then((result) => {
            if (result.value) {
                this.facturaService.delete(factura.id).subscribe(response => {
                    this.cliente.facturas = this.cliente.facturas.filter(f => f !== factura);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Borrada!', `Factura ${factura.descripcion} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    cerrarModal() {
        this.modalClienteService.cerrarModal();
        this.fotoSelecionada = null;
        this.progreso = 0;
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
DetalleClienteComponent.ctorParameters = () => [
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__["FuncionesService"] },
    { type: _services_modal_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ModalClienteService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _facturas_services_factura_service__WEBPACK_IMPORTED_MODULE_7__["FacturaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetalleClienteComponent.prototype, "cliente", void 0);
DetalleClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/detalle-cliente/detalle-cliente.component.html")).default
    })
], DetalleClienteComponent);



/***/ }),

/***/ "./src/app/clientes/formularios/form-cliente.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/clientes/formularios/form-cliente.component.ts ***!
  \****************************************************************/
/*! exports provided: MyErrorStateMatcher, FormClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClienteComponent", function() { return FormClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/cliente */ "./src/app/clientes/interfaces/cliente.ts");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cliente.service */ "./src/app/clientes/services/cliente.service.ts");
/* harmony import */ var _regiones_services_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../regiones/services/region.service */ "./src/app/regiones/services/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");









/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let FormClienteComponent = class FormClienteComponent {
    constructor(clienteService, regionService, router, activatedRoute, loadingService, formBuilder) {
        this.clienteService = clienteService;
        this.regionService = regionService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.formBuilder = formBuilder;
        this.minDate = new Date(1930, 1, 1);
        this.maxDate = new Date();
        this.cliente = new _interfaces_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        this.titulo = 'Crear Cliente';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.crearFormulario();
        this.cargarCliente();
    }
    cargarCliente() {
        this.loadingService.abrirModal();
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.clienteService.getCliente(id).subscribe((cliente) => {
                    this.cliente = cliente,
                        console.log(cliente);
                    this.asignarDatosFormulario();
                });
            }
        });
        this.regionService.getRegionLista().subscribe(regiones => this.regiones = regiones);
        this.loadingService.cerrarModal();
    }
    create() {
        this.loadingService.abrirModal();
        this.asignarDatosParaGuardar();
        this.clienteService.create(this.cliente).subscribe(cliente => {
            this.router.navigate(['/clientes']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'Nuevo Cliente',
                    text: `${cliente.nombre} `,
                    footer: 'Creado con Exito!',
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
            console.error(err);
        });
    }
    update() {
        this.loadingService.abrirModal();
        this.asignarDatosParaGuardar();
        this.clienteService.update(this.cliente)
            .subscribe(cliente => {
            this.router.navigate(['/clientes']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'Cliente',
                    text: `${cliente.nombre} `,
                    footer: 'Actualizado con Exito!',
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
            console.error(err);
        });
    }
    compararRegion(o1, o2) {
        if (o1 === undefined && o2 === undefined) {
            return true;
        }
        return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
    }
    // tratamiento a formulario
    crearFormulario() {
        this.formularioCreado = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)
                ])],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)
                ])],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email
                ])],
            celular1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)
                ])],
            celular2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)
                ])],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(7)
                ])],
            direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)
                ])],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    asignarDatosFormulario() {
        this.formularioCreado.setValue({
            nombre: this.cliente.nombre,
            apellido: this.cliente.apellido,
            documento: this.cliente.documento,
            email: this.cliente.email,
            celular1: this.cliente.celular1,
            celular2: this.cliente.celular2,
            telefono: this.cliente.telefono,
            direccion: this.cliente.direccion,
            region: this.cliente.region,
            fecha: this.cliente.fecha,
        });
    }
    asignarDatosParaGuardar() {
        this.cliente.nombre = this.formularioCreado.value.nombre,
            this.cliente.apellido = this.formularioCreado.value.apellido,
            this.cliente.documento = this.formularioCreado.value.documento,
            this.cliente.email = this.formularioCreado.value.email,
            this.cliente.celular1 = this.formularioCreado.value.celular1,
            this.cliente.direccion = this.formularioCreado.value.direccion,
            this.cliente.fecha = this.formularioCreado.value.fecha;
        this.cliente.region = this.formularioCreado.value.region;
        if (this.formularioCreado.value.celular2 !== '') {
            this.cliente.celular2 = this.formularioCreado.value.celular2;
        }
        if (this.formularioCreado.value.telefono !== '') {
            this.cliente.telefono = this.formularioCreado.value.telefono;
        }
    }
};
FormClienteComponent.ctorParameters = () => [
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _regiones_services_region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FormClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/formularios/form-cliente.component.html")).default
    })
], FormClienteComponent);



/***/ }),

/***/ "./src/app/clientes/interfaces/cliente.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/interfaces/cliente.ts ***!
  \************************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cliente {
    constructor() {
        this.facturas = [];
    }
}


/***/ }),

/***/ "./src/app/clientes/lista-clientes/clientes.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/clientes/lista-clientes/clientes.component.ts ***!
  \***************************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cliente.service */ "./src/app/clientes/services/cliente.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/modal-cliente.service */ "./src/app/clientes/services/modal-cliente.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _facturas_services_modalFactura_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../facturas/services/modalFactura.service */ "./src/app/facturas/services/modalFactura.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");











let ClientesComponent = class ClientesComponent {
    constructor(clienteService, modalClienteService, modalFacturaService, activatedRoute, loadingService, funcionesService, authService) {
        this.clienteService = clienteService;
        this.modalClienteService = modalClienteService;
        this.modalFacturaService = modalFacturaService;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.funcionesService = funcionesService;
        this.authService = authService;
        this.link = '/clientes/page';
    }
    ngOnInit() {
        this.titulo = this.funcionesService.setTitulo();
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.clienteService.getClientes(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
                // console.log('ClientesComponent: tap 3');
                response.content.forEach(cliente => {
                    //  console.log(cliente.nombre);
                    this.loadingService.cerrarModal();
                });
            })).subscribe(response => {
                this.clientes = response.content;
                this.paginador = response;
            });
        });
        this.modalClienteService.notificarUpload.subscribe(cliente => {
            this.clientes = this.clientes.map(clienteOriginal => {
                if (cliente.id === clienteOriginal.id) {
                    clienteOriginal.foto = cliente.foto;
                }
                return clienteOriginal;
            });
        });
    }
    delete(cliente) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar Al Cliente ${cliente.nombre} ${cliente.apellido} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Cliente!'
        }).then((result) => {
            if (result.value) {
                this.clienteService.delete(cliente.id).subscribe(response => {
                    this.clientes = this.clientes.filter(cli => cli !== cliente);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Borrado!', `Cliente ${cliente.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModal() {
        this.modalFacturaService.abrirModal();
    }
};
ClientesComponent.ctorParameters = () => [
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _services_modal_cliente_service__WEBPACK_IMPORTED_MODULE_7__["ModalClienteService"] },
    { type: _facturas_services_modalFactura_service__WEBPACK_IMPORTED_MODULE_9__["ModalFacturaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-clientes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clientes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/lista-clientes/clientes.component.html")).default
    })
], ClientesComponent);



/***/ }),

/***/ "./src/app/clientes/services/cliente.service.ts":
/*!******************************************************!*\
  !*** ./src/app/clientes/services/cliente.service.ts ***!
  \******************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ClienteService = class ClienteService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/clientes`;
    }
    getClientes(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('ClienteService: tap 1');
            response.content.forEach(cliente => {
                //  console.log(cliente.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(cliente => {
                cliente.nombre = cliente.nombre.toUpperCase();
                return cliente;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            // console.log('ClienteService: tap2');
            response.content.forEach(cliente => {
                //  console.log(cliente.nombre);
            });
        }));
    }
    create(cliente) {
        console.log('crear cliente');
        console.log(cliente);
        return this.http.post(this.urlEndPoint, cliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.cliente), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getCliente(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/clientes']);
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(cliente) {
        return this.http.put(`${this.urlEndPoint}/${cliente.id}`, cliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.cliente), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.cliente), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    subirFoto(archivo, id) {
        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('id', id);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', `${this.urlEndPoint}/uploadimgcliente`, formData, {
            reportProgress: true
        });
        return this.http.request(req);
    }
    filtrarClientes(term) {
        return this.http.get(`${this.urlEndPoint}/filtrar-clientes/${term}`);
    }
};
ClienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ClienteService);



/***/ }),

/***/ "./src/app/clientes/services/modal-cliente.service.ts":
/*!************************************************************!*\
  !*** ./src/app/clientes/services/modal-cliente.service.ts ***!
  \************************************************************/
/*! exports provided: ModalClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClienteService", function() { return ModalClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalClienteService = class ModalClienteService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        // console.log(this.modal);
        this.modal = true;
        // console.log('llego al servicio del modal true');
        // console.log(this.modal);
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalClienteService);



/***/ }),

/***/ "./src/app/facturas/buscar-factura-numero/factura-buscar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/facturas/buscar-factura-numero/factura-buscar.component.ts ***!
  \****************************************************************************/
/*! exports provided: FacturaBuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaBuscarComponent", function() { return FacturaBuscarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_modal_factura_buscar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/modal-factura-buscar.service */ "./src/app/facturas/services/modal-factura-buscar.service.ts");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/factura.service */ "./src/app/facturas/services/factura.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");








let FacturaBuscarComponent = class FacturaBuscarComponent {
    constructor(modalFacturaBuscarService, funcionesService, facturaService, authService, loadingService) {
        this.modalFacturaBuscarService = modalFacturaBuscarService;
        this.funcionesService = funcionesService;
        this.facturaService = facturaService;
        this.authService = authService;
        this.loadingService = loadingService;
        this.titulo = 'Buscar Factura';
    }
    cerrarModalBusquedaFactura() {
        this.modalFacturaBuscarService.cerrarModal();
        this.factura = null;
    }
    buscarFactura() {
        this.loadingService.abrirModal();
        if (this.id === null || this.id === undefined) {
            this.loadingService.cerrarModal();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Error al ingresar Numero de factura',
                text: 'Solo *Numeros* en este campo',
                footer: 'Favor ingresar un numero de factura valido',
            });
        }
        else {
            this.facturaService.getFactura(this.id).subscribe(factura => {
                this.factura = factura,
                    this.loadingService.cerrarModal();
            });
        }
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
FacturaBuscarComponent.ctorParameters = () => [
    { type: _services_modal_factura_buscar_service__WEBPACK_IMPORTED_MODULE_2__["ModalFacturaBuscarService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_4__["FuncionesService"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_3__["FacturaService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
];
FacturaBuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factura-buscar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factura-buscar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/buscar-factura-numero/factura-buscar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], FacturaBuscarComponent);



/***/ }),

/***/ "./src/app/facturas/buscar-por-rango-fecha/filtrar-facturas.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/facturas/buscar-por-rango-fecha/filtrar-facturas.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FiltrarFacturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrarFacturasComponent", function() { return FiltrarFacturasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/factura.service */ "./src/app/facturas/services/factura.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _services_modalFactura_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/modalFactura.service */ "./src/app/facturas/services/modalFactura.service.ts");
/* harmony import */ var _services_modal_factura_buscar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/modal-factura-buscar.service */ "./src/app/facturas/services/modal-factura-buscar.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");









let FiltrarFacturasComponent = class FiltrarFacturasComponent {
    constructor(facturaService, modalFacturaService, modalFacturaBuscarService, funcionesService, loadingService, authService) {
        this.facturaService = facturaService;
        this.modalFacturaService = modalFacturaService;
        this.modalFacturaBuscarService = modalFacturaBuscarService;
        this.funcionesService = funcionesService;
        this.loadingService = loadingService;
        this.authService = authService;
        this.titulo = 'Informes - Facturas';
        this.gananciaFiltro = 0;
        this.totalFiltro = 0;
        this.titulo = this.funcionesService.setTitulo();
    }
    filtrarFacturas() {
        this.gananciaFiltro = 0;
        this.totalFiltro = 0;
        if (this.fechaInicioFiltro !== undefined && this.fechaInicioFiltro != null) {
            if (this.fechaFinFiltro !== undefined && this.fechaFinFiltro != null) {
                this.loadingService.abrirModal();
                this.facturaService.getFiltrarFacturasPorFecha(this.fechaInicioFiltro, this.fechaFinFiltro)
                    .subscribe(facturas => {
                    this.facturas = facturas;
                    this.facturas.forEach(datos => {
                        this.gananciaFiltro += datos.totalGanancia;
                        this.totalFiltro += datos.total;
                    });
                    this.loadingService.cerrarModal();
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: `No ha Selecionado una Fecha`,
                    text: 'Selecionar Fecha Final, para realizar busqueda',
                    footer: '',
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: `No ha Selecionado una Fecha`,
                text: 'Selecionar Fecha Inicial, para realizar busqueda',
                footer: '',
            });
        }
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
FiltrarFacturasComponent.ctorParameters = () => [
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_2__["FacturaService"] },
    { type: _services_modalFactura_service__WEBPACK_IMPORTED_MODULE_4__["ModalFacturaService"] },
    { type: _services_modal_factura_buscar_service__WEBPACK_IMPORTED_MODULE_5__["ModalFacturaBuscarService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_6__["FuncionesService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FiltrarFacturasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filtrar-facturas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filtrar-facturas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/buscar-por-rango-fecha/filtrar-facturas.component.html")).default,
    })
], FiltrarFacturasComponent);



/***/ }),

/***/ "./src/app/facturas/cliente-facturar/cliente-facturar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/facturas/cliente-facturar/cliente-facturar.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClienteFacturarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteFacturarComponent", function() { return ClienteFacturarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_modalFactura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/modalFactura.service */ "./src/app/facturas/services/modalFactura.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _clientes_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clientes/services/cliente.service */ "./src/app/clientes/services/cliente.service.ts");






let ClienteFacturarComponent = class ClienteFacturarComponent {
    constructor(modalFacturaService, clienteService) {
        this.modalFacturaService = modalFacturaService;
        this.clienteService = clienteService;
        this.titulo = 'Buscar Cliente';
        this.autocompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    ngOnInit() {
        this.clientesFiltrados = this.autocompleteControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => typeof value === 'string' ? value : value.nombre), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(value => value ? this._filter(value) : []));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.clienteService.filtrarClientes(filterValue);
    }
    mostrarNombre(cliente) {
        return cliente ? cliente.nombre : undefined;
    }
    seleccionarCliente(event) {
        this.cliente = event.option.value;
        this.id = this.cliente.id;
        this.autocompleteControl.setValue('');
        event.option.focus();
        event.option.deselect();
    }
    cerrarModal() {
        this.modalFacturaService.cerrarModal();
        this.cliente = null;
    }
};
ClienteFacturarComponent.ctorParameters = () => [
    { type: _services_modalFactura_service__WEBPACK_IMPORTED_MODULE_3__["ModalFacturaService"] },
    { type: _clientes_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] }
];
ClienteFacturarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-facturar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente-facturar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/cliente-facturar/cliente-facturar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], ClienteFacturarComponent);



/***/ }),

/***/ "./src/app/facturas/detalle-factura/detalle-factura.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/facturas/detalle-factura/detalle-factura.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetalleFacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFacturaComponent", function() { return DetalleFacturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/factura.service */ "./src/app/facturas/services/factura.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_sucursales_interfaces_sucursal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sucursales/interfaces/sucursal */ "./src/app/sucursales/interfaces/sucursal.ts");










let DetalleFacturaComponent = class DetalleFacturaComponent {
    constructor(facturaService, funcionesService, authService, activatedRoute, loadingService) {
        this.facturaService = facturaService;
        this.funcionesService = funcionesService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.titulo = 'Factura Nº: ';
        // jsPDF: any;
        this.sucursal = new src_app_sucursales_interfaces_sucursal__WEBPACK_IMPORTED_MODULE_9__["Sucursal"]();
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe((params) => {
            const id = +params.get('id');
            this.facturaService.getFactura(id).subscribe((factura) => {
                (this.factura = factura), this.loadingService.cerrarModal();
            });
        });
        this.cargarSucursal();
    }
    cargarSucursal() {
        this.sucursal = this.funcionesService.getDatos();
    }
    generarFactura(factura) {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__();
        doc.setFontSize(12);
        doc.text(`${this.sucursal.sede}`, 30, 18);
        doc.setFontSize(10);
        doc.text('---------------------------------------', 24, 24);
        doc.text('-------------------------------------------------', 64, 24);
        doc.setFontSize(12);
        doc.text(`${this.sucursal.propietario} `, 30, 29);
        doc.setFontSize(10);
        doc.text(`Nit. ${this.sucursal.nit}`, 60, 29);
        doc.setFontSize(8);
        doc.text(`Regimen ${this.sucursal.regimen}`, 63, 32);
        doc.setFontSize(10);
        doc.text('---------------------------------------', 24, 35);
        doc.text('-------------------------------------------------', 64, 35);
        doc.setFontSize(10);
        doc.text(`${this.sucursal.direccion}.`, 30, 38);
        doc.setFontSize(8);
        doc.text(` ${this.sucursal.geoposicion}.`, 55, 41);
        doc.setFontSize(10);
        doc.text(`WhatsApp: ${this.sucursal.celular1}.    Telefono: ${this.sucursal.telefono}.`, 30, 46);
        doc.text(`Cel:            ${this.sucursal.celular2}.`, 30, 51);
        doc.text('---------------------------------------', 24, 54);
        doc.text('-------------------------------------------------', 64, 54);
        doc.setFontSize(12);
        doc.text(`Cliente: ${factura.cliente.nombre} ${factura.cliente.apellido}`, 30, 59);
        doc.setFontSize(10);
        doc.text(`C.C./Nit : ${factura.cliente.documento}`, 30, 63);
        doc.text(`Cel: ${factura.cliente.celular1}`, 80, 63);
        doc.text(`Direccion: ${factura.cliente.region.nombre}  ${factura.cliente.direccion}`, 30, 68);
        doc.setFontSize(15);
        doc.text(`Factura de Venta Nº: ${factura.numeroFactura}`, 125, 68);
        doc.setFontSize(8);
        doc.text(`Fecha Factura:  ${factura.createAt}`, 125, 72);
        doc.setFontSize(10);
        doc.text('---------------------------------------', 24, 73);
        doc.text('-------------------------------------------------', 64, 73);
        let conta = 84;
        for (const i of factura.items) {
            conta += 10;
        }
        if (factura.descuento != null && factura.descuento > 0) {
            doc.text('Descuento: ' + this.formatNumber(factura.descuento), 110, conta);
        }
        doc.setFontSize(12);
        doc.text('Total: ' + this.formatNumber(factura.total), 150, conta);
        conta += 6;
        if (factura.observacion !== null) {
            doc.text('Observacion: ' + factura.observacion, 30, conta);
        }
        else {
            doc.text('Observacion: ', 30, conta);
        }
        conta += 5;
        doc.setFontSize(10);
        doc.text('---------------------------------------', 24, conta);
        doc.text('---------------------------------------', 64, conta);
        doc.text('-------------------------------------------------------------------', 104, conta);
        conta += 5;
        doc.text('Esta factura de venta es a titulo', 90, conta);
        conta += 5;
        doc.text('valor segun ley 121 del 2008', 92, conta);
        conta += 5;
        doc.setFontSize(6);
        doc.text('* Para cualquiero tipo de reclamo ó garantia debe presentar este documento.* ', 80, conta);
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_8___default()(doc, { html: '#tablaFactura', styles: { fillColor: [156, 156, 156] },
            columnStyles: { 0: { halign: 'center' }, },
            margin: { top: 75 } });
        doc.save(`${factura.numeroFactura}-factura.pdf`);
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
DetalleFacturaComponent.ctorParameters = () => [
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_3__["FacturaService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_5__["FuncionesService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
DetalleFacturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-factura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-factura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/detalle-factura/detalle-factura.component.html")).default,
    })
], DetalleFacturaComponent);



/***/ }),

/***/ "./src/app/facturas/facturacion/facturas.component.ts":
/*!************************************************************!*\
  !*** ./src/app/facturas/facturacion/facturas.component.ts ***!
  \************************************************************/
/*! exports provided: FacturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasComponent", function() { return FacturasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_factura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/factura */ "./src/app/facturas/interfaces/factura.ts");
/* harmony import */ var _clientes_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clientes/services/cliente.service */ "./src/app/clientes/services/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/factura.service */ "./src/app/facturas/services/factura.service.ts");
/* harmony import */ var _interfaces_item_factura__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interfaces/item-factura */ "./src/app/facturas/interfaces/item-factura.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _productos_interfaces_producto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../productos/interfaces/producto */ "./src/app/productos/interfaces/producto.ts");
/* harmony import */ var _productos_services_producto_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../productos/services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");
















let FacturasComponent = class FacturasComponent {
    constructor(clienteService, userService, facturaService, productoService, authService, router, activatedRoute, funcionesService, loadingService) {
        this.clienteService = clienteService;
        this.userService = userService;
        this.facturaService = facturaService;
        this.productoService = productoService;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.funcionesService = funcionesService;
        this.loadingService = loadingService;
        this.products = _productos_interfaces_producto__WEBPACK_IMPORTED_MODULE_10__["Producto"];
        this.factura = new _interfaces_factura__WEBPACK_IMPORTED_MODULE_2__["Factura"]();
        this.checked = false;
        this.estadoNumero = false;
        this.autocompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.titulo = `${this.funcionesService.setTitulo()} - Nueva Factura -`;
        this.activatedRoute.paramMap.subscribe(params => {
            const clienteId = +params.get('clienteId');
            this.clienteService.getCliente(clienteId)
                .subscribe(cliente => this.factura.cliente = cliente);
            this.userService.getUser(JSON.parse(sessionStorage.getItem('usuario')).id)
                .subscribe(usuario => {
                this.factura.usuario = usuario,
                    this.loadingService.cerrarModal();
            });
            this.cargarUltimaFactura();
        });
        this.productosFiltrados = this.autocompleteControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => typeof value === 'string' ? value : value.nombre), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(value => value ? this._filter(value) : []));
    }
    cargarUltimaFactura() {
        this.facturaService.getFacturaUltima()
            .subscribe(facturas => {
            this.facturas = facturas,
                this.facturas.forEach(datos => {
                    this.numeroFactura = datos.numeroFactura + 1;
                    this.factura.numeroFactura = this.numeroFactura;
                });
        });
        // this.llenarNumeroFactura();
    }
    llenarNumeroFactura() {
        if (this.numeroFactura === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'info',
                title: 'Esta es la primera Factura',
                text: 'Favor Ingresar Numero de Factura Inicial',
                footer: 'En el Campo Numero Factura',
            });
        }
        else {
            this.factura.numeroFactura = this.numeroFactura + 1;
        }
    }
    _filter(value) {
        const filterValue = value.toUpperCase();
        return this.productoService.filtrarProductos(filterValue);
    }
    mostrarNombre(producto) {
        return producto ? producto.nombre : undefined;
    }
    seleccionarProducto(event) {
        const producto = event.option.value;
        if (this.existeItem(producto.id)) {
            this.incrementaCantidad(producto.id);
        }
        else {
            const nuevoItem = new _interfaces_item_factura__WEBPACK_IMPORTED_MODULE_8__["ItemFactura"]();
            nuevoItem.producto = producto;
            if (producto.cantidad > 0) {
                this.factura.items.push(nuevoItem);
                // guarda en el localStore
            }
        }
        this.autocompleteControl.setValue('');
        event.option.focus();
        event.option.deselect();
    }
    actualizarCantidad(id, event) {
        const cantidad = event.target.value;
        if (cantidad <= 0) {
            this.checked = false;
            return this.eliminarItemFactura(id);
        }
        this.factura.items = this.factura.items.map((item) => {
            if (id === item.producto.id) {
                // restara cantidad al producto
                if (item.producto.cantidad > 0 && item.cantidad <= item.producto.cantidad) {
                    item.cantidad = cantidad;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        type: 'error',
                        title: 'Oops',
                        text: 'La cantidad de Articulos supera al Stock',
                        footer: 'Intente de nuevo',
                    });
                    this.checked = false;
                    item.cantidad = 1;
                }
            }
            return item;
        });
    }
    existeItem(id) {
        let existe = false;
        this.factura.items.forEach((item) => {
            if (id === item.producto.id) {
                existe = true;
            }
        });
        return existe;
    }
    incrementaCantidad(id) {
        this.factura.items = this.factura.items.map((item) => {
            if (id === item.producto.id) {
                if (item.producto.cantidad > 0) {
                    ++item.cantidad;
                }
            }
            return item;
        });
    }
    eliminarItemFactura(id) {
        this.checked = false;
        this.factura.items = this.factura.items
            .filter((item) => id !== item.producto.id);
    }
    create(facturaForm) {
        if (this.factura.items.length === 0) {
            this.autocompleteControl.setErrors({ invalid: true });
        }
        if (facturaForm.form.valid && this.factura.items.length > 0) {
            this.loadingService.abrirModal();
            this.factura.totalGanancia = this.factura.calcularGananciaTotal();
            this.facturaService.create(this.factura).subscribe(factura => {
                this.factura.items.forEach((item) => {
                    item.producto.cantidad = item.producto.cantidad - item.cantidad;
                    this.productoService.update(item.producto)
                        .subscribe(() => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            type: 'success',
                            title: 'Facturado!',
                            text: `${factura.descripcion} Creada con éxito!`,
                            footer: 'Intente de nuevo',
                        });
                        this.loadingService.cerrarModal();
                        this.router.navigate(['/facturas', factura.id]);
                    }, err => {
                        this.errores = err.error.errors,
                            this.loadingService.cerrarModal();
                    });
                });
            });
        }
    }
    validarDescuento(dato) {
        if (dato !== null) {
            if (dato.descuento <= dato.calcularGananciaTotal()) {
                return this.formatNumber(dato.descuento);
            }
            else {
                dato.descuento = 0;
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    type: 'error',
                    title: 'Ooops',
                    text: `Esta aplicando un descuento que supera la ganancia`,
                    footer: 'Intente de nuevo',
                });
                return '0';
            }
        }
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
FacturasComponent.ctorParameters = () => [
    { type: _clientes_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_7__["FacturaService"] },
    { type: _productos_services_producto_service__WEBPACK_IMPORTED_MODULE_11__["ProductoService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_14__["FuncionesService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_15__["LoadingService"] }
];
FacturasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facturas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facturas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturacion/facturas.component.html")).default
    })
], FacturasComponent);



/***/ }),

/***/ "./src/app/facturas/interfaces/factura.ts":
/*!************************************************!*\
  !*** ./src/app/facturas/interfaces/factura.ts ***!
  \************************************************/
/*! exports provided: Factura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factura", function() { return Factura; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Factura {
    constructor() {
        this.descripcion = 'Factura Venta';
        this.items = [];
        this.descuento = 0;
    }
    aplicarDescuento(desc) {
        this.total -= desc;
        console.log(this.total);
    }
    calcularGranTotal() {
        this.total = 0;
        this.items.forEach((item) => {
            this.total += item.calcularImporte();
        });
        if (this.descuento > 0) {
            this.total -= this.descuento;
        }
        return this.total;
    }
    calcularGananciaTotal() {
        this.totalGanancia = 0;
        this.items.forEach((item) => {
            this.totalGanancia += item.calcularGanancia();
        });
        if (this.descuento > 0) {
            this.totalGanancia -= this.descuento;
        }
        return this.totalGanancia;
    }
}


/***/ }),

/***/ "./src/app/facturas/interfaces/item-factura.ts":
/*!*****************************************************!*\
  !*** ./src/app/facturas/interfaces/item-factura.ts ***!
  \*****************************************************/
/*! exports provided: ItemFactura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFactura", function() { return ItemFactura; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ItemFactura {
    constructor() {
        this.cantidad = 1;
    }
    calcularImporte() {
        return this.cantidad * this.producto.precio;
    }
    calcularGanancia() {
        return this.cantidad * (this.producto.precio - this.producto.precioCompra);
    }
}


/***/ }),

/***/ "./src/app/facturas/lista-facturas/lista-facturas.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/facturas/lista-facturas/lista-facturas.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListaFacturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFacturasComponent", function() { return ListaFacturasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/factura.service */ "./src/app/facturas/services/factura.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _services_modalFactura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/modalFactura.service */ "./src/app/facturas/services/modalFactura.service.ts");
/* harmony import */ var _services_modal_factura_buscar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/modal-factura-buscar.service */ "./src/app/facturas/services/modal-factura-buscar.service.ts");
/* harmony import */ var _productos_services_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../productos/services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");











let ListaFacturasComponent = class ListaFacturasComponent {
    constructor(facturaService, productoService, modalFacturaService, modalFacturaBuscarService, funcionesService, activatedRoute, authService, loadingService) {
        this.facturaService = facturaService;
        this.productoService = productoService;
        this.modalFacturaService = modalFacturaService;
        this.modalFacturaBuscarService = modalFacturaBuscarService;
        this.funcionesService = funcionesService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.loadingService = loadingService;
        this.dato = ' prueba ';
        this.link = '/facturas/page';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.titulo = this.funcionesService.setTitulo();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.facturaService.getFacturas(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
                // console.log('FacturasComponent: tap 3');
                response.content.forEach(cliente => {
                    this.loadingService.cerrarModal();
                    // console.log(cliente.nombre);
                });
            })).subscribe(response => {
                this.facturas = response.content;
                this.paginador = response;
            });
        });
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
    abrirModal() {
        this.modalFacturaService.abrirModal();
    }
    abrirModalBuscarFactura() {
        this.modalFacturaBuscarService.abrirModal();
    }
};
ListaFacturasComponent.ctorParameters = () => [
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_2__["FacturaService"] },
    { type: _productos_services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"] },
    { type: _services_modalFactura_service__WEBPACK_IMPORTED_MODULE_6__["ModalFacturaService"] },
    { type: _services_modal_factura_buscar_service__WEBPACK_IMPORTED_MODULE_7__["ModalFacturaBuscarService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__["FuncionesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
];
ListaFacturasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-facturas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-facturas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/lista-facturas/lista-facturas.component.html")).default
    })
], ListaFacturasComponent);



/***/ }),

/***/ "./src/app/facturas/services/factura.service.ts":
/*!******************************************************!*\
  !*** ./src/app/facturas/services/factura.service.ts ***!
  \******************************************************/
/*! exports provided: FacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaService", function() { return FacturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FacturaService = class FacturaService {
    constructor(http, funcionesService) {
        this.http = http;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/facturas`;
    }
    getFacturas(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('FacturaService: tap 1');
            response.content.forEach(factura => {
                // console.log(factura.descripcion);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(factura => {
                factura.nombre = factura.descripcion.toUpperCase();
                return factura;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            // console.log('FacturaService: tap2');
            response.content.forEach(factura => {
                //  console.log(factura.descripcion);
            });
        }));
    }
    getFactura(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`);
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`);
    }
    create(factura) {
        return this.http.post(this.urlEndPoint, factura);
    }
    createFactura(factura) {
        return this.http.post(this.urlEndPoint, factura).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.factura), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    filtrarFacturas(term) {
        return this.http.get(`${this.urlEndPoint}/filtrar-facturas/${term}`);
    }
    getFacturaUltima() {
        return this.http.get(`${this.urlEndPoint}/ultimafactura`);
    }
    getFiltrarFacturasPorFecha(term1, term2) {
        return this.http.get(`${this.urlEndPoint}/fecha1/${term1}/fecha2/${term2}`);
    }
};
FacturaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
FacturaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FacturaService);



/***/ }),

/***/ "./src/app/facturas/services/modal-factura-buscar.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/facturas/services/modal-factura-buscar.service.ts ***!
  \*******************************************************************/
/*! exports provided: ModalFacturaBuscarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFacturaBuscarService", function() { return ModalFacturaBuscarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalFacturaBuscarService = class ModalFacturaBuscarService {
    constructor() {
        this.modal = false;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalFacturaBuscarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalFacturaBuscarService);



/***/ }),

/***/ "./src/app/facturas/services/modalFactura.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/facturas/services/modalFactura.service.ts ***!
  \***********************************************************/
/*! exports provided: ModalFacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFacturaService", function() { return ModalFacturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalFacturaService = class ModalFacturaService {
    constructor() {
        this.modal = false;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalFacturaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalFacturaService);



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.autor = { nombre: 'Ing. Manuel yivan', apellido: ' Rodriguez Carreño' };
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/generales/css/modal.css":
/*!*****************************************!*\
  !*** ./src/app/generales/css/modal.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".abrir-modal{\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n.animacion{\r\n  animation-duration: 2s;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-fill-mode: both;\r\n\r\n}\r\n\r\n.fadeIn{\r\n  animation-name: fadeIn;\r\n  -webkit-animation-name: fadeIn;\r\n\r\n}\r\n\r\n@keyframes fadeIn{0% { opacity:0 }to{opacity:1}}\r\n\r\n@-webkit-keyframes fadeIn{0% { opacity:0 }to{opacity:1}}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 700px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbGVzL2Nzcy9tb2RhbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixpQ0FBaUM7O0FBRW5DOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4Qjs7QUFFaEM7O0FBRUEsa0JBQWtCLEtBQUssVUFBVSxDQUFDLEdBQUcsU0FBUyxDQUFDOztBQUUvQywwQkFBMEIsS0FBSyxVQUFVLENBQUMsR0FBRyxTQUFTLENBQUM7O0FBRXZEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmFsZXMvY3NzL21vZGFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnJpci1tb2RhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uYW5pbWFjaW9ue1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG5cclxufVxyXG4uZmFkZUlue1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW57MCUgeyBvcGFjaXR5OjAgfXRve29wYWNpdHk6MX19XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluezAlIHsgb3BhY2l0eTowIH10b3tvcGFjaXR5OjF9fVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/generales/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/generales/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingComponent = class LoadingComponent {
    constructor() {
        this.titulo = 'Cargando....';
    }
};
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generales/loading/loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/generales/pagina404/pagina404.component.css":
/*!*************************************************************!*\
  !*** ./src/app/generales/pagina404/pagina404.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWxlcy9wYWdpbmE0MDQvcGFnaW5hNDA0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/generales/pagina404/pagina404.component.ts":
/*!************************************************************!*\
  !*** ./src/app/generales/pagina404/pagina404.component.ts ***!
  \************************************************************/
/*! exports provided: Pagina404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina404Component", function() { return Pagina404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let Pagina404Component = class Pagina404Component {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            console.log(params);
            // const id = +params.get('id');
            // this.facturaService.getFactura(id)
            // .subscribe(factura => {this.factura = factura,
            //      this.loadingService.cerrarModal();
            // });
        });
    }
};
Pagina404Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Pagina404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagina404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagina404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generales/pagina404/pagina404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagina404.component.css */ "./src/app/generales/pagina404/pagina404.component.css")).default]
    })
], Pagina404Component);



/***/ }),

/***/ "./src/app/generales/paginador/paginador.component.ts":
/*!************************************************************!*\
  !*** ./src/app/generales/paginador/paginador.component.ts ***!
  \************************************************************/
/*! exports provided: PaginadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginadorComponent", function() { return PaginadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginadorComponent = class PaginadorComponent {
    constructor() { }
    ngOnChanges() {
        this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
        this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);
        if (this.paginador.totalPages > 5) {
            this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map(
            // tslint:disable-next-line: variable-name
            (_valor, indice) => indice + this.desde);
        }
        else {
            // tslint:disable-next-line: variable-name
            this.paginas = new Array(this.paginador.totalPages).fill(0).map((_valor, indice) => indice + 1);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginadorComponent.prototype, "paginador", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginadorComponent.prototype, "link", void 0);
PaginadorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginador',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginador.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generales/paginador/paginador.component.html")).default,
    })
], PaginadorComponent);



/***/ }),

/***/ "./src/app/generales/services/funciones.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/generales/services/funciones.service.ts ***!
  \*********************************************************/
/*! exports provided: FuncionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionesService", function() { return FuncionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let FuncionesService = class FuncionesService {
    constructor() {
        this.urlBase = 'http://localhost:8080/';
    }
    formatNumber(numero) {
        if (numero !== null && numero !== undefined) {
            const separador = '.'; // separador para los miles
            const sepDecimal = ','; // separador para los decimales
            let num;
            num = numero.toString();
            num += '';
            const splitStr = num.split('.');
            let splitLeft = splitStr[0];
            const splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
            const regx = /(\d+)(\d{3})/;
            while (regx.test(splitLeft)) {
                splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
            }
            num = '$' + splitLeft + splitRight;
            return num;
        }
    }
    validarInputs(opcion, dato, nombreCampo, min, max) {
        switch (opcion) {
            case 'numero': {
                if (dato < 0 || dato === null || dato === undefined) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: `El campo '${nombreCampo}`,
                        text: `no debe estar vacio ni contener letras`,
                        footer: 'Intente de nuevo',
                    });
                    return true;
                }
                else if (dato < min) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: 'El valor minimo del Campo ',
                        text: `'${nombreCampo}' no es valido`,
                        footer: 'Intente de nuevo',
                    });
                    return true;
                }
                else if (dato >= max) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: 'El valor maximo del Campo',
                        text: `'${nombreCampo}' no es valido`,
                        footer: 'Intente de nuevo',
                    });
                }
                return false;
            }
            case 'texto': {
                if (dato === null || dato === undefined) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: `El campo '${nombreCampo}'`,
                        text: `No puede estar vacio `,
                        footer: 'Intente de nuevo',
                    });
                    return true;
                }
                else if (dato.toString().length < min) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: `El campo '${nombreCampo}' `,
                        text: `debe contener minimo '${min}' caracteres`,
                        footer: 'Intente de nuevo',
                    });
                    return true;
                }
                else if (dato.toString().length > max) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: `El campo '${nombreCampo}' `,
                        text: `debe contener maximo '${max}' caracteres`,
                        footer: 'Intente de nuevo',
                    });
                    return true;
                }
                return false;
            }
        }
    }
    setTitulo() {
        let sucursal;
        let titulo;
        sucursal = JSON.parse(sessionStorage.getItem('sucursal'));
        titulo = `Sucursal: ${sucursal.nombre}`;
        return titulo;
    }
    getDatos() {
        let sucursal;
        sucursal = JSON.parse(sessionStorage.getItem('sucursal'));
        return sucursal;
    }
    setUrlBase() {
        // se settea la url para los servicios
        return (this.urlBase);
    }
};
FuncionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FuncionesService);



/***/ }),

/***/ "./src/app/generales/services/loading.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/generales/services/loading.service.ts ***!
  \*******************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingService = class LoadingService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sucursales_services_sucursal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../sucursales/services/sucursal.service */ "./src/app/sucursales/services/sucursal.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let HeaderComponent = class HeaderComponent {
    constructor(authService, router, sucursalService) {
        this.authService = authService;
        this.router = router;
        this.sucursalService = sucursalService;
        this.sucursalService.getSucursalLista().subscribe(sucursales => this.sucursales = sucursales);
    }
    logout() {
        const username = this.authService.usuario.username;
        this.authService.logout();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            type: 'info',
            title: '¡Informacion!',
            text: `Hasta pronto ${username}`,
            footer: 'Has cerrado sesión con éxito!',
        });
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _sucursales_services_sucursal_service__WEBPACK_IMPORTED_MODULE_4__["SucursalService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/productos/detalle-producto/detalle-producto.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/productos/detalle-producto/detalle-producto.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetalleProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProductoComponent", function() { return DetalleProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var _services_modal_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/modal-producto.service */ "./src/app/productos/services/modal-producto.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _producto_buscar_modal_producto_buscar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../producto-buscar/modal-producto-buscar.service */ "./src/app/productos/producto-buscar/modal-producto-buscar.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let DetalleProductoComponent = class DetalleProductoComponent {
    constructor(productoService, modalProductoService, modalProductoBuscarService, funcionesService, activatedRoute, authService, loadingService) {
        this.productoService = productoService;
        this.modalProductoService = modalProductoService;
        this.modalProductoBuscarService = modalProductoBuscarService;
        this.funcionesService = funcionesService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.loadingService = loadingService;
        this.titulo = 'Detalle Producto';
        this.progreso = 0;
        this.rutaFoto = 'Selecionar Foto';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe(params => {
            const id = +params.get('id');
            this.productoService.getProducto(id)
                .subscribe(producto => {
                this.producto = producto,
                    console.log('formato cliente');
                console.log(producto);
                this.loadingService.cerrarModal();
            });
        });
    }
    seleccionarFoto(event) {
        this.fotoSelecionada = event.target.files[0];
        this.progreso = 0;
        if (this.fotoSelecionada.type.indexOf('image') < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al Subir Selecionar Imagen',
                text: `El archivo debe ser del tipo 'Imagen'`,
                footer: 'Intente de nuevo',
            });
            this.fotoSelecionada = null;
        }
        else {
            this.rutaFoto = this.fotoSelecionada.name;
        }
    }
    subirFoto() {
        console.log('ingreso a subir foto');
        if (!this.fotoSelecionada) {
            this.rutaFoto = 'Selecionar Foto';
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al Subir Imagen',
                text: `No ha selecionado una imagen`,
                footer: 'Intente de nuevo',
            });
        }
        else {
            this.productoService.subirFoto(this.fotoSelecionada, this.producto.id)
                .subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                    this.progreso = Math.round((event.loaded / event.total) * 100);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                    const response = event.body;
                    this.producto = response.producto;
                    this.modalProductoService.notificarUpload.emit(this.producto);
                    this.rutaFoto = 'Selecionar Foto';
                    this.fotoSelecionada = null;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'success',
                        title: 'La Foto se ha subido con Exito!',
                        text: response.mensaje,
                        footer: '',
                    });
                    // pendiente meter un time out
                    this.progreso = 0;
                }
            });
        }
    }
    cerrarModal() {
        this.modalProductoService.cerrarModal();
        this.fotoSelecionada = null;
        this.progreso = 0;
        this.modalProductoBuscarService.cerrarModal();
        this.producto = null;
    }
    calcularInversion(cantidad, precioCompra) {
        const inversion = cantidad * precioCompra;
        return this.formatNumber(inversion);
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
DetalleProductoComponent.ctorParameters = () => [
    { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] },
    { type: _services_modal_producto_service__WEBPACK_IMPORTED_MODULE_4__["ModalProductoService"] },
    { type: _producto_buscar_modal_producto_buscar_service__WEBPACK_IMPORTED_MODULE_8__["ModalProductoBuscarService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__["FuncionesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], DetalleProductoComponent.prototype, "producto", void 0);
DetalleProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detalle-producto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/detalle-producto/detalle-producto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], DetalleProductoComponent);



/***/ }),

/***/ "./src/app/productos/formularios/form-producto.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/productos/formularios/form-producto.component.ts ***!
  \******************************************************************/
/*! exports provided: FormProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function() { return FormProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_producto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/producto */ "./src/app/productos/interfaces/producto.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var _categorias_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categorias/services/categoria.service */ "./src/app/categorias/services/categoria.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");









let FormProductoComponent = class FormProductoComponent {
    constructor(productoService, categoriaService, router, funcionesServicer, activatedRoute, loadingService) {
        this.productoService = productoService;
        this.categoriaService = categoriaService;
        this.router = router;
        this.funcionesServicer = funcionesServicer;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.producto = new _interfaces_producto__WEBPACK_IMPORTED_MODULE_2__["Producto"]();
        this.titulo = 'Crear Productos';
    }
    ngOnInit() {
        this.cargarProducto();
    }
    cargarProducto() {
        this.loadingService.abrirModal();
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.productoService.getProducto(id).subscribe((producto) => {
                    this.producto = producto,
                        this.prePrecioCompra = this.producto.precioCompra,
                        this.preCantidad = this.producto.cantidad,
                        this.loadingService.cerrarModal();
                });
            }
        });
        this.loadingService.cerrarModal();
        // this.categoriaService.getCategoriaLista().subscribe(categorias => this.categorias = categorias);
    }
    create() {
        this.loadingService.abrirModal();
        if (this.funcionesServicer.validarInputs('texto', this.producto.nombre, 'Nombre', 3, 50)) {
        }
        else if (this.funcionesServicer.validarInputs('texto', this.producto.codigo, 'Codigo', 1, 5)) {
            this.producto.codigo = '0';
        }
        else if (this.funcionesServicer.validarInputs('numero', this.producto.precioCompra, 'Precio Compra', 25, 100000000)) {
            this.producto.precioCompra = 0;
        }
        else if (this.funcionesServicer.validarInputs('numero', this.producto.precio, 'Precio Venta', 25, 100000000)) {
            this.producto.precio = 0;
        }
        else if (this.producto.precioCompra > this.producto.precio) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: `Precio De Venta Menor Al Precio De Compra:`,
                text: `El Precio De Venta debe ser 'MAYOR' o 'IGUAL' al Precio de Compra`,
                footer: `Favor Corregir!`
            });
        }
        else if (this.funcionesServicer.validarInputs('numero', this.producto.cantidad, 'Cantidad', 0, 1000)) {
            this.producto.cantidad = 0;
        }
        else {
            this.productoService.create(this.producto).subscribe(producto => {
                this.router.navigate(['/productos']),
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        type: 'success',
                        title: `Producto:`,
                        text: `${producto.nombre}`,
                        footer: `Creado con Exito!`
                    });
                this.loadingService.cerrarModal();
            }, err => {
                this.errores = err.error.errors;
                this.loadingService.cerrarModal();
            });
        }
    }
    update() {
        this.loadingService.abrirModal();
        if (this.prePrecioCompra !== this.producto.precioCompra
            && this.preCantidad !== this.producto.cantidad && this.producto.cantidad > 0) {
            const diferenciaDeCantidad = this.producto.cantidad - this.preCantidad;
            const inversionAnterior = this.prePrecioCompra * this.preCantidad;
            console.log('inversion anterior: ' + this.prePrecioCompra + ' * ' + this.preCantidad +
                ' = ' + inversionAnterior);
            const inversionActual = this.producto.precioCompra * diferenciaDeCantidad;
            console.log('inversion nueva: ' + this.producto.precioCompra + ' * ' + diferenciaDeCantidad +
                ' = ' + inversionActual);
            const inversionTotal = inversionAnterior + inversionActual;
            console.log('inversion total: ' + inversionTotal);
            const nuevoCostoUnidad = (inversionTotal / this.producto.cantidad);
            console.log('nuevo costo unidad : ' + nuevoCostoUnidad);
            this.producto.precioCompra = nuevoCostoUnidad;
        }
        if (this.funcionesServicer.validarInputs('texto', this.producto.nombre, 'Nombre', 3, 50)) {
        }
        else if (this.funcionesServicer.validarInputs('numero', this.producto.precioCompra, 'Precio Compra', 25, 100000000)) {
            this.producto.precioCompra = 0;
        }
        else if (this.funcionesServicer.validarInputs('numero', this.producto.precio, 'Precio Venta', 25, 100000000)) {
            this.producto.precio = 0;
        }
        else if (this.producto.precioCompra > this.producto.precio) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: `Precio De Venta Menor Al Precio De Compra:`,
                text: `El Precio De Venta debe ser 'MAYOR' o 'IGUAL' al Precio de Compra`,
                footer: `Favor Corregir!`
            });
        }
        else if (this.funcionesServicer.validarInputs('numero', this.producto.cantidad, 'Cantidad', 0, 1000)) {
            this.producto.cantidad = 0;
        }
        else {
            this.productoService.update(this.producto)
                .subscribe(producto => {
                this.router.navigate(['/productos']),
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        type: 'success',
                        title: `Producto:`,
                        text: `${producto.nombre}`,
                        footer: `Actualizado con Exito!`
                    });
                this.loadingService.cerrarModal();
            }, err => {
                this.errores = err.error.errors;
                this.loadingService.cerrarModal();
            });
        }
    }
};
FormProductoComponent.ctorParameters = () => [
    { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] },
    { type: _categorias_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_7__["FuncionesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
];
FormProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-producto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/formularios/form-producto.component.html")).default
    })
], FormProductoComponent);



/***/ }),

/***/ "./src/app/productos/interfaces/producto.ts":
/*!**************************************************!*\
  !*** ./src/app/productos/interfaces/producto.ts ***!
  \**************************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// import { Categoria } from '../categorias/categoria';
class Producto {
}


/***/ }),

/***/ "./src/app/productos/lista-productos/productos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/productos/lista-productos/productos.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/modal-producto.service */ "./src/app/productos/services/modal-producto.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _producto_buscar_modal_producto_buscar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../producto-buscar/modal-producto-buscar.service */ "./src/app/productos/producto-buscar/modal-producto-buscar.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");











let ProductosComponent = class ProductosComponent {
    constructor(productoService, modalProductoService, modalProductoBuscarService, activatedRoute, funcionesService, authService, loadingService) {
        this.productoService = productoService;
        this.modalProductoService = modalProductoService;
        this.modalProductoBuscarService = modalProductoBuscarService;
        this.activatedRoute = activatedRoute;
        this.funcionesService = funcionesService;
        this.authService = authService;
        this.loadingService = loadingService;
        this.link = '/productos/page';
    }
    ngOnInit() {
        this.cerrarModalBusquedaProducto();
        this.titulo = this.funcionesService.setTitulo();
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.productoService.getProductos(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
                // console.log('ProductoComponent: tap 3');
                response.content.forEach(producto => {
                    this.loadingService.cerrarModal();
                    //  console.log(producto);
                });
            })).subscribe(response => {
                this.productos = response.content;
                this.paginador = response;
            });
        });
        this.modalProductoService.notificarUpload.subscribe(producto => {
            this.productos = this.productos.map(productoOriginal => {
                if (producto.id === productoOriginal.id) {
                    productoOriginal.foto = producto.foto;
                }
                return productoOriginal;
            });
        });
    }
    delete(producto) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar El Producto ${producto.nombre} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Producto!'
        }).then((result) => {
            if (result.value) {
                this.productoService.delete(producto.id).subscribe(response => {
                    this.productos = this.productos.filter(cli => cli !== producto);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Borrado!', `Producto ${producto.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModalProductoBuscar() {
        this.modalProductoBuscarService.abrirModal();
    }
    cerrarModalBusquedaProducto() {
        this.modalProductoBuscarService.cerrarModal();
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
ProductosComponent.ctorParameters = () => [
    { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] },
    { type: _services_modal_producto_service__WEBPACK_IMPORTED_MODULE_6__["ModalProductoService"] },
    { type: _producto_buscar_modal_producto_buscar_service__WEBPACK_IMPORTED_MODULE_8__["ModalProductoBuscarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__["FuncionesService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
];
ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/lista-productos/productos.component.html")).default
    })
], ProductosComponent);



/***/ }),

/***/ "./src/app/productos/producto-buscar/modal-producto-buscar.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/productos/producto-buscar/modal-producto-buscar.service.ts ***!
  \****************************************************************************/
/*! exports provided: ModalProductoBuscarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProductoBuscarService", function() { return ModalProductoBuscarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalProductoBuscarService = class ModalProductoBuscarService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalProductoBuscarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalProductoBuscarService);



/***/ }),

/***/ "./src/app/productos/producto-buscar/producto-buscar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/productos/producto-buscar/producto-buscar.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductoBuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoBuscarComponent", function() { return ProductoBuscarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modal_producto_buscar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-producto-buscar.service */ "./src/app/productos/producto-buscar/modal-producto-buscar.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/producto.service */ "./src/app/productos/services/producto.service.ts");
/* harmony import */ var _services_modal_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/modal-producto.service */ "./src/app/productos/services/modal-producto.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");









let ProductoBuscarComponent = class ProductoBuscarComponent {
    constructor(modalProductoBuscarService, modalProductoService, authService, productoService, funcionesService) {
        this.modalProductoBuscarService = modalProductoBuscarService;
        this.modalProductoService = modalProductoService;
        this.authService = authService;
        this.productoService = productoService;
        this.funcionesService = funcionesService;
        this.titulo = 'Buscar Producto';
        this.autocompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.productosFiltrados = this.autocompleteControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.nombre), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(value => value ? this._filter(value) : []));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.productoService.filtrarProductos(filterValue);
    }
    mostrarNombre(producto) {
        return producto ? producto.nombre : undefined;
    }
    seleccionarProducto(event) {
        this.producto = event.option.value;
        this.id = this.producto.id;
        // console.log('seleciono producto: ');
        // console.log(this.producto);
        this.autocompleteControl.setValue('');
        event.option.focus();
        event.option.deselect();
    }
    abrirModal(producto) {
        this.productoSelecionado = producto;
        this.modalProductoService.abrirModal();
    }
    cerrarModalBusquedaProducto() {
        this.modalProductoBuscarService.cerrarModal();
        this.producto = null;
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
ProductoBuscarComponent.ctorParameters = () => [
    { type: _modal_producto_buscar_service__WEBPACK_IMPORTED_MODULE_4__["ModalProductoBuscarService"] },
    { type: _services_modal_producto_service__WEBPACK_IMPORTED_MODULE_6__["ModalProductoService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_7__["FuncionesService"] }
];
ProductoBuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto-buscar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./producto-buscar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/producto-buscar/producto-buscar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], ProductoBuscarComponent);



/***/ }),

/***/ "./src/app/productos/services/modal-producto.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/productos/services/modal-producto.service.ts ***!
  \**************************************************************/
/*! exports provided: ModalProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProductoService", function() { return ModalProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalProductoService = class ModalProductoService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalProductoService);



/***/ }),

/***/ "./src/app/productos/services/producto.service.ts":
/*!********************************************************!*\
  !*** ./src/app/productos/services/producto.service.ts ***!
  \********************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let ProductoService = class ProductoService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/productos`;
    }
    getProductos(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('ProductoService: tap 1');
            response.content.forEach(producto => {
                // console.log(producto.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(producto => {
                producto.nombre = producto.nombre.toUpperCase();
                return producto;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            // console.log('ProductoService: tap2');
            response.content.forEach(producto => {
                // console.log(producto.nombre);
            });
        }));
    }
    create(producto) {
        return this.http.post(this.urlEndPoint, producto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.producto), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: e.error.mensaje,
                    text: `Ya existe un producto Con este 'Nombre'`,
                });
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getProducto(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/productos']);
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(producto) {
        return this.http.put(`${this.urlEndPoint}/${producto.id}`, producto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.producto), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: e.error.mensaje,
                    text: `Ya existe un producto Con este 'Nombre'`,
                });
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.producto), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    subirFoto(archivo, id) {
        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('id', id);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', `${this.urlEndPoint}/uploadimgproducto`, formData, {
            reportProgress: true
        });
        return this.http.request(req);
    }
    filtrarProductos(term) {
        return this.http.get(`${this.urlEndPoint}/filtrar-productos/${term}`);
    }
    filtrarClientes(term) {
        return this.http.get(`${this.urlEndPoint}/filtrar-productos/${term}`);
    }
};
ProductoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ProductoService);



/***/ }),

/***/ "./src/app/regiones/detalle-region/detalle-region.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/regiones/detalle-region/detalle-region.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetalleRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRegionComponent", function() { return DetalleRegionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/region.service */ "./src/app/regiones/services/region.service.ts");
/* harmony import */ var _services_modal_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal-region.service */ "./src/app/regiones/services/modal-region.service.ts");




let DetalleRegionComponent = class DetalleRegionComponent {
    constructor(regionService, modalRegionService) {
        this.regionService = regionService;
        this.modalRegionService = modalRegionService;
        this.titulo = 'Detalle Barrio';
    }
    cerrarModal() {
        this.modalRegionService.cerrarModal();
    }
};
DetalleRegionComponent.ctorParameters = () => [
    { type: _services_region_service__WEBPACK_IMPORTED_MODULE_2__["RegionService"] },
    { type: _services_modal_region_service__WEBPACK_IMPORTED_MODULE_3__["ModalRegionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetalleRegionComponent.prototype, "region", void 0);
DetalleRegionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-region',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-region.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/detalle-region/detalle-region.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], DetalleRegionComponent);



/***/ }),

/***/ "./src/app/regiones/formularios/form-regiones.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/regiones/formularios/form-regiones.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormRegionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegionesComponent", function() { return FormRegionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/region */ "./src/app/regiones/interfaces/region.ts");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/region.service */ "./src/app/regiones/services/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");







let FormRegionesComponent = class FormRegionesComponent {
    constructor(regionService, router, activatedRoute, loadingService) {
        this.regionService = regionService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.region = new _interfaces_region__WEBPACK_IMPORTED_MODULE_2__["Region"]();
        this.titulo = 'Crear Region';
    }
    ngOnInit() {
        this.cargarRegion();
    }
    cargarRegion() {
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.regionService.getRegion(id).subscribe((region) => {
                    this.region = region,
                        this.loadingService.cerrarModal();
                });
            }
        });
    }
    create() {
        this.loadingService.abrirModal();
        this.regionService.create(this.region).subscribe(region => {
            this.router.navigate(['/regiones']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: `Nuevo Barrio`,
                    text: `${region.nombre}`,
                    footer: `Creado con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            console.error(err);
            this.loadingService.cerrarModal();
        });
    }
    update() {
        this.loadingService.abrirModal();
        this.regionService.update(this.region)
            .subscribe(region => {
            this.router.navigate(['/regiones']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: `Barrio`,
                    text: `${region.nombre}`,
                    footer: `Actualizado con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
        });
    }
};
FormRegionesComponent.ctorParameters = () => [
    { type: _services_region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
FormRegionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-regiones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-regiones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/formularios/form-regiones.component.html")).default
    })
], FormRegionesComponent);



/***/ }),

/***/ "./src/app/regiones/interfaces/region.ts":
/*!***********************************************!*\
  !*** ./src/app/regiones/interfaces/region.ts ***!
  \***********************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Region {
}


/***/ }),

/***/ "./src/app/regiones/lista-regiones/regiones.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/regiones/lista-regiones/regiones.component.ts ***!
  \***************************************************************/
/*! exports provided: RegionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionesComponent", function() { return RegionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/region.service */ "./src/app/regiones/services/region.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_region_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/modal-region.service */ "./src/app/regiones/services/modal-region.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");










let RegionesComponent = class RegionesComponent {
    constructor(regionService, modalRegionService, activatedRoute, authService, loadingService, funcionesService) {
        this.regionService = regionService;
        this.modalRegionService = modalRegionService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.loadingService = loadingService;
        this.funcionesService = funcionesService;
        this.link = '/regiones/page';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.titulo = this.funcionesService.setTitulo();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.regionService.getRegiones(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
                // console.log('RegionesComponent: tap 3');
                response.content.forEach(region => {
                    this.loadingService.cerrarModal();
                    //  console.log(region.nombre);
                });
            })).subscribe(response => {
                this.regiones = response.content;
                this.paginador = response;
            });
        });
    }
    delete(region) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar el Barrio ${region.nombre} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Barrio!'
        }).then((result) => {
            if (result.value) {
                this.regionService.delete(region.id).subscribe(response => {
                    this.regiones = this.regiones.filter(reg => reg !== region);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Borrado!', `Barrio ${region.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModal(region) {
        this.regionSelecionado = region;
        this.modalRegionService.abrirModal();
    }
};
RegionesComponent.ctorParameters = () => [
    { type: _services_region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"] },
    { type: _services_modal_region_service__WEBPACK_IMPORTED_MODULE_7__["ModalRegionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
RegionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-regiones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regiones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/regiones/lista-regiones/regiones.component.html")).default
    })
], RegionesComponent);



/***/ }),

/***/ "./src/app/regiones/services/modal-region.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/regiones/services/modal-region.service.ts ***!
  \***********************************************************/
/*! exports provided: ModalRegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRegionService", function() { return ModalRegionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalRegionService = class ModalRegionService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalRegionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalRegionService);



/***/ }),

/***/ "./src/app/regiones/services/region.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/regiones/services/region.service.ts ***!
  \*****************************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let RegionService = class RegionService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/regiones`;
    }
    getRegiones(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('RegionService: tap 1');
            response.content.forEach(region => {
                //  console.log(region.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(region => {
                region.nombre = region.nombre.toUpperCase();
                return region;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            //  console.log('RegionService: tap2');
            response.content.forEach(region => {
                //  console.log(region.nombre);
            });
        }));
    }
    getRegionLista() {
        return this.http.get(this.urlEndPoint);
    }
    create(region) {
        return this.http.post(this.urlEndPoint, region).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.region), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getRegion(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/regiones']);
                console.error(e.error.mensaje);
            }
            this.router.navigate(['/regiones']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(region) {
        return this.http.put(`${this.urlEndPoint}/${region.id}`, region).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.region), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.region), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
};
RegionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
RegionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RegionService);



/***/ }),

/***/ "./src/app/servicios/detalle-servicio/detalle-servicio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/servicios/detalle-servicio/detalle-servicio.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetalleServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleServicioComponent", function() { return DetalleServicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicio.service */ "./src/app/servicios/services/servicio.service.ts");
/* harmony import */ var _services_modal_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal-servicio.service */ "./src/app/servicios/services/modal-servicio.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _services_modal_servicio_buscar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/modal-servicio-buscar.service */ "./src/app/servicios/services/modal-servicio-buscar.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");







let DetalleServicioComponent = class DetalleServicioComponent {
    constructor(servicioService, modalServicioService, modalServicioBuscarService, authService, funcionesService) {
        this.servicioService = servicioService;
        this.modalServicioService = modalServicioService;
        this.modalServicioBuscarService = modalServicioBuscarService;
        this.authService = authService;
        this.funcionesService = funcionesService;
        this.titulo = 'Detalle Servicio';
    }
    cerrarModal() {
        this.modalServicioService.cerrarModal();
        this.modalServicioBuscarService.cerrarModal();
        this.servicio = null;
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
DetalleServicioComponent.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"] },
    { type: _services_modal_servicio_service__WEBPACK_IMPORTED_MODULE_3__["ModalServicioService"] },
    { type: _services_modal_servicio_buscar_service__WEBPACK_IMPORTED_MODULE_5__["ModalServicioBuscarService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_6__["FuncionesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetalleServicioComponent.prototype, "servicio", void 0);
DetalleServicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-servicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-servicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/detalle-servicio/detalle-servicio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], DetalleServicioComponent);



/***/ }),

/***/ "./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".abrir-modal{\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n.animacion{\r\n  animation-duration: 2s;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-fill-mode: both;\r\n\r\n}\r\n\r\n.fadeIn{\r\n  animation-name: fadeIn;\r\n  -webkit-animation-name: fadeIn;\r\n\r\n}\r\n\r\n@keyframes fadeIn{0% { opacity:0 }to{opacity:1}}\r\n\r\n@-webkit-keyframes fadeIn{0% { opacity:0 }to{opacity:1}}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljaW9zL2RldGFsbGUtc2VydmljaW8vc2VydmljaW8tYnVzY2FyL3NlcnZpY2lvLWJ1c2Nhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUNBQWlDOztBQUVuQzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7O0FBRWhDOztBQUVBLGtCQUFrQixLQUFLLFVBQVUsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7QUFFL0MsMEJBQTBCLEtBQUssVUFBVSxDQUFDLEdBQUcsU0FBUyxDQUFDOztBQUV2RDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2VydmljaW9zL2RldGFsbGUtc2VydmljaW8vc2VydmljaW8tYnVzY2FyL3NlcnZpY2lvLWJ1c2Nhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFicmlyLW1vZGFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5hbmltYWNpb257XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcblxyXG59XHJcbi5mYWRlSW57XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbnswJSB7IG9wYWNpdHk6MCB9dG97b3BhY2l0eToxfX1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW57MCUgeyBvcGFjaXR5OjAgfXRve29wYWNpdHk6MX19XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ServicioBuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioBuscarComponent", function() { return ServicioBuscarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_modal_servicio_buscar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/modal-servicio-buscar.service */ "./src/app/servicios/services/modal-servicio-buscar.service.ts");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/servicio.service */ "./src/app/servicios/services/servicio.service.ts");
/* harmony import */ var _services_modal_servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/modal-servicio.service */ "./src/app/servicios/services/modal-servicio.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");








let ServicioBuscarComponent = class ServicioBuscarComponent {
    constructor(modalServicioBuscarService, modalServicioService, servicioService, funcionesService) {
        this.modalServicioBuscarService = modalServicioBuscarService;
        this.modalServicioService = modalServicioService;
        this.servicioService = servicioService;
        this.funcionesService = funcionesService;
        this.titulo = 'Buscar Servicio';
        this.autocompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.serviciosFiltrados = this.autocompleteControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.nombre), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(value => value ? this._filter(value) : []));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.servicioService.filtrarServicios(filterValue);
    }
    mostrarNombre(servicio) {
        return servicio ? servicio.nombre : undefined;
    }
    seleccionarServicio(event) {
        this.servicio = event.option.value;
        this.id = this.servicio.id;
        // console.log('seleciono producto: ');
        // console.log(this.producto);
        this.autocompleteControl.setValue('');
        event.option.focus();
        event.option.deselect();
    }
    abrirModal(servicio) {
        this.servicioSelecionado = servicio;
        this.modalServicioService.abrirModal();
    }
    cerrarModalBusquedaServicio() {
        this.modalServicioBuscarService.cerrarModal();
        this.servicio = null;
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
ServicioBuscarComponent.ctorParameters = () => [
    { type: _services_modal_servicio_buscar_service__WEBPACK_IMPORTED_MODULE_4__["ModalServicioBuscarService"] },
    { type: _services_modal_servicio_service__WEBPACK_IMPORTED_MODULE_6__["ModalServicioService"] },
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_5__["ServicioService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_7__["FuncionesService"] }
];
ServicioBuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicio-buscar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicio-buscar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servicio-buscar.component.css */ "./src/app/servicios/detalle-servicio/servicio-buscar/servicio-buscar.component.css")).default]
    })
], ServicioBuscarComponent);



/***/ }),

/***/ "./src/app/servicios/formularios/form-servicio.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/servicios/formularios/form-servicio.component.ts ***!
  \******************************************************************/
/*! exports provided: FormServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServicioComponent", function() { return FormServicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_servicio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/servicio */ "./src/app/servicios/interfaces/servicio.ts");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/servicio.service */ "./src/app/servicios/services/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");







let FormServicioComponent = class FormServicioComponent {
    constructor(servicioService, router, activatedRoute, loadingService) {
        this.servicioService = servicioService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.servicio = new _interfaces_servicio__WEBPACK_IMPORTED_MODULE_2__["Servicio"]();
        this.titulo = 'Crear Servicio';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.cargarServicio();
    }
    cargarServicio() {
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.servicioService.getServicio(id).subscribe((servicio) => {
                    this.servicio = servicio,
                        this.loadingService.cerrarModal();
                });
            }
        });
    }
    create() {
        this.loadingService.abrirModal();
        this.servicioService.create(this.servicio).subscribe(servicio => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: `Nuevo Servicio`,
                text: `${servicio.nombre}`,
                footer: `Creado con Exito!`
            });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
        });
    }
    update() {
        this.loadingService.abrirModal();
        this.servicioService.update(this.servicio)
            .subscribe(servicio => {
            this.router.navigate(['/servicios']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: `Servicio`,
                    text: `${servicio.nombre}`,
                    footer: `Actualizado con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
        });
    }
};
FormServicioComponent.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__["ServicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
FormServicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-servicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-servicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/formularios/form-servicio.component.html")).default
    })
], FormServicioComponent);



/***/ }),

/***/ "./src/app/servicios/interfaces/servicio.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/interfaces/servicio.ts ***!
  \**************************************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Servicio {
}


/***/ }),

/***/ "./src/app/servicios/lista-servicios/servicios.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/servicios/lista-servicios/servicios.component.ts ***!
  \******************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicio.service */ "./src/app/servicios/services/servicio.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/modal-servicio.service */ "./src/app/servicios/services/modal-servicio.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _services_modal_servicio_buscar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/modal-servicio-buscar.service */ "./src/app/servicios/services/modal-servicio-buscar.service.ts");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");










let ServiciosComponent = class ServiciosComponent {
    constructor(servicioService, modalServicioService, modalServicioBuscarService, activatedRoute, funcionesService, authService) {
        this.servicioService = servicioService;
        this.modalServicioService = modalServicioService;
        this.modalServicioBuscarService = modalServicioBuscarService;
        this.activatedRoute = activatedRoute;
        this.funcionesService = funcionesService;
        this.authService = authService;
        this.link = '/servicios/page';
    }
    ngOnInit() {
        this.cerrarModalBusquedaServicio();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.servicioService.getServicios(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
                console.log('ServicioComponent: tap 3');
                response.content.forEach(servicio => {
                    // console.log(servicio);
                });
            })).subscribe(response => {
                this.servicios = response.content;
                this.paginador = response;
            });
        });
    }
    delete(servicio) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar El Producto ${servicio.nombre} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Servicio!'
        }).then((result) => {
            if (result.value) {
                this.servicioService.delete(servicio.id).subscribe(response => {
                    this.servicios = this.servicios.filter(cli => cli !== servicio);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Borrado!', `Producto ${servicio.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModal(servicio) {
        this.servicioSelecionado = servicio;
        this.modalServicioService.abrirModal();
    }
    abrirModalServicioBuscar() {
        this.modalServicioBuscarService.abrirModal();
    }
    cerrarModalBusquedaServicio() {
        this.modalServicioBuscarService.cerrarModal();
    }
    formatNumber(cantidad) {
        return this.funcionesService.formatNumber(cantidad);
    }
};
ServiciosComponent.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"] },
    { type: _services_modal_servicio_service__WEBPACK_IMPORTED_MODULE_6__["ModalServicioService"] },
    { type: _services_modal_servicio_buscar_service__WEBPACK_IMPORTED_MODULE_8__["ModalServicioBuscarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_9__["FuncionesService"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ServiciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/lista-servicios/servicios.component.html")).default
    })
], ServiciosComponent);



/***/ }),

/***/ "./src/app/servicios/services/modal-servicio-buscar.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/servicios/services/modal-servicio-buscar.service.ts ***!
  \*********************************************************************/
/*! exports provided: ModalServicioBuscarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalServicioBuscarService", function() { return ModalServicioBuscarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalServicioBuscarService = class ModalServicioBuscarService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalServicioBuscarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalServicioBuscarService);



/***/ }),

/***/ "./src/app/servicios/services/modal-servicio.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/servicios/services/modal-servicio.service.ts ***!
  \**************************************************************/
/*! exports provided: ModalServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalServicioService", function() { return ModalServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalServicioService = class ModalServicioService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalServicioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalServicioService);



/***/ }),

/***/ "./src/app/servicios/services/servicio.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/services/servicio.service.ts ***!
  \********************************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ServicioService = class ServicioService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/servicios`;
    }
    getServicios(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('servicioService: tap 1');
            response.content.forEach(servicio => {
                // console.log(servicio.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(servicio => {
                servicio.nombre = servicio.nombre.toUpperCase();
                return servicio;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            // console.log('ServicioService: tap2');
            response.content.forEach(servicio => {
                // console.log(servicio.nombre);
            });
        }));
    }
    create(servicio) {
        return this.http.post(this.urlEndPoint, servicio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.servicio), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getServicio(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/servicios']);
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(servicio) {
        return this.http.put(`${this.urlEndPoint}/${servicio.id}`, servicio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.servicio), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.servicio), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    filtrarServicios(term) {
        return this.http.get(`${this.urlEndPoint}/filtrar-servicios/${term}`);
    }
};
ServicioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
ServicioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ServicioService);



/***/ }),

/***/ "./src/app/sucursales/detalle-sucursal/detalle-sucursal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sucursales/detalle-sucursal/detalle-sucursal.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetalleSucursalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSucursalComponent", function() { return DetalleSucursalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sucursal.service */ "./src/app/sucursales/services/sucursal.service.ts");
/* harmony import */ var _services_modal_sucursal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal-sucursal.service */ "./src/app/sucursales/services/modal-sucursal.service.ts");




let DetalleSucursalComponent = class DetalleSucursalComponent {
    constructor(sucursalService, modalSucursalService) {
        this.sucursalService = sucursalService;
        this.modalSucursalService = modalSucursalService;
        this.titulo = 'Detalle Sucursal';
    }
    cerrarModal() {
        this.modalSucursalService.cerrarModal();
    }
};
DetalleSucursalComponent.ctorParameters = () => [
    { type: _services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__["SucursalService"] },
    { type: _services_modal_sucursal_service__WEBPACK_IMPORTED_MODULE_3__["ModalSucursalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetalleSucursalComponent.prototype, "sucursal", void 0);
DetalleSucursalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-sucursal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-sucursal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/detalle-sucursal/detalle-sucursal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], DetalleSucursalComponent);



/***/ }),

/***/ "./src/app/sucursales/formularios/form-sucursales.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sucursales/formularios/form-sucursales.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormSucursalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSucursalesComponent", function() { return FormSucursalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_sucursal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/sucursal */ "./src/app/sucursales/interfaces/sucursal.ts");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sucursal.service */ "./src/app/sucursales/services/sucursal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");







let FormSucursalesComponent = class FormSucursalesComponent {
    constructor(sucursalService, router, activatedRoute, loadingService) {
        this.sucursalService = sucursalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.sucursal = new _interfaces_sucursal__WEBPACK_IMPORTED_MODULE_2__["Sucursal"]();
        this.titulo = 'Crear Sucursal';
    }
    ngOnInit() {
        this.cargarSucursal();
    }
    cargarSucursal() {
        this.loadingService.abrirModal();
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.sucursalService.getSucursal(id).subscribe((sucursal) => { this.sucursal = sucursal, console.log(this.sucursal); });
            }
        });
        this.loadingService.cerrarModal();
    }
    create() {
        this.loadingService.abrirModal();
        this.sucursalService.create(this.sucursal).subscribe(sucursal => {
            this.router.navigate(['/sucursales']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: `Nuevo Sucursal`,
                    text: `${sucursal.nombre}`,
                    footer: `Creado con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            console.error(err);
            this.loadingService.cerrarModal();
        });
    }
    update() {
        this.loadingService.abrirModal();
        this.sucursalService.update(this.sucursal)
            .subscribe(sucursal => {
            this.router.navigate(['/sucursales']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: `Sucursal`,
                    text: `${sucursal.nombre}`,
                    footer: `Actualizada con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
        });
    }
};
FormSucursalesComponent.ctorParameters = () => [
    { type: _services_sucursal_service__WEBPACK_IMPORTED_MODULE_3__["SucursalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
FormSucursalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-sucursales',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-sucursales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/formularios/form-sucursales.component.html")).default
    })
], FormSucursalesComponent);



/***/ }),

/***/ "./src/app/sucursales/interfaces/sucursal.ts":
/*!***************************************************!*\
  !*** ./src/app/sucursales/interfaces/sucursal.ts ***!
  \***************************************************/
/*! exports provided: Sucursal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sucursal", function() { return Sucursal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Sucursal {
}


/***/ }),

/***/ "./src/app/sucursales/lista-sucursales/lista-sucursales.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sucursales/lista-sucursales/lista-sucursales.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaSucursalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaSucursalesComponent", function() { return ListaSucursalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sucursal.service */ "./src/app/sucursales/services/sucursal.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_sucursal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/modal-sucursal.service */ "./src/app/sucursales/services/modal-sucursal.service.ts");
/* harmony import */ var _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../users/services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");










let ListaSucursalesComponent = class ListaSucursalesComponent {
    constructor(sucursalService, modalSucursalService, activatedRoute, authService, loadingService, funcionesService) {
        this.sucursalService = sucursalService;
        this.modalSucursalService = modalSucursalService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.loadingService = loadingService;
        this.funcionesService = funcionesService;
        this.link = '/sucursales/page';
    }
    ngOnInit() {
        this.titulo = this.funcionesService.setTitulo();
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.sucursalService.getSucursales(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
                // console.log('RegionesComponent: tap 3');
                response.content.forEach(sucursal => {
                    this.loadingService.cerrarModal();
                    //  console.log(region.nombre);
                });
            })).subscribe(response => {
                this.sucursales = response.content;
                this.paginador = response;
            });
        });
    }
    delete(sucursal) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar la Sucursal ${sucursal.nombre} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Sucursal!'
        }).then((result) => {
            if (result.value) {
                this.sucursalService.delete(sucursal.id).subscribe(response => {
                    this.sucursales = this.sucursales.filter(reg => reg !== sucursal);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Borrado!', `Barrio ${sucursal.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModal(sucursal) {
        this.sucursalSelecionado = sucursal;
        this.modalSucursalService.abrirModal();
    }
};
ListaSucursalesComponent.ctorParameters = () => [
    { type: _services_sucursal_service__WEBPACK_IMPORTED_MODULE_3__["SucursalService"] },
    { type: _services_modal_sucursal_service__WEBPACK_IMPORTED_MODULE_7__["ModalSucursalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _users_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
ListaSucursalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lista-sucursales',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-sucursales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sucursales/lista-sucursales/lista-sucursales.component.html")).default
    })
], ListaSucursalesComponent);



/***/ }),

/***/ "./src/app/sucursales/services/modal-sucursal.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/sucursales/services/modal-sucursal.service.ts ***!
  \***************************************************************/
/*! exports provided: ModalSucursalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSucursalService", function() { return ModalSucursalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalSucursalService = class ModalSucursalService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalSucursalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalSucursalService);



/***/ }),

/***/ "./src/app/sucursales/services/sucursal.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/sucursales/services/sucursal.service.ts ***!
  \*********************************************************/
/*! exports provided: SucursalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalService", function() { return SucursalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SucursalService = class SucursalService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/sucursales`;
    }
    getSucursales(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('RegionService: tap 1');
            response.content.forEach(sucursal => {
                //  console.log(region.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(sucursal => {
                sucursal.nombre = sucursal.nombre.toUpperCase();
                return sucursal;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            //  console.log('RegionService: tap2');
            response.content.forEach(sucursal => {
                //  console.log(region.nombre);
            });
        }));
    }
    getSucursalLista() {
        return this.http.get(this.urlEndPoint);
    }
    create(sucursal) {
        return this.http.post(this.urlEndPoint, sucursal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.sucursal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getSucursal(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/sucursales']);
                console.error(e.error.mensaje);
            }
            this.router.navigate(['/sucursales']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(sucursal) {
        return this.http.put(`${this.urlEndPoint}/${sucursal.id}`, sucursal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.sucursal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.sucursal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
};
SucursalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
SucursalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SucursalService);



/***/ }),

/***/ "./src/app/users/detalle-user/detalle-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/detalle-user/detalle-user.component.ts ***!
  \**************************************************************/
/*! exports provided: DetalleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleUserComponent", function() { return DetalleUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _services_modal_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal-user.service */ "./src/app/users/services/modal-user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");







let DetalleUserComponent = class DetalleUserComponent {
    constructor(userService, authService, modalUserService) {
        this.userService = userService;
        this.authService = authService;
        this.modalUserService = modalUserService;
        this.titulo = 'Detalle Usuarios';
        this.progreso = 0;
        this.rutaFoto = 'Selecionar Foto';
    }
    seleccionarFoto(event) {
        this.fotoSelecionada = event.target.files[0];
        this.progreso = 0;
        if (this.fotoSelecionada.type.indexOf('image') < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al Subir Selecionar Imagen',
                text: `El archivo debe ser del tipo 'Imagen'`,
                footer: 'Intente de nuevo',
            });
            this.fotoSelecionada = null;
        }
        else {
            this.rutaFoto = this.fotoSelecionada.name;
        }
    }
    subirFoto() {
        if (!this.fotoSelecionada) {
            this.rutaFoto = 'Selecionar Foto';
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al Subir Imagen',
                text: `No ha selecionado una imagen`,
                footer: 'Intente de nuevo',
            });
        }
        else {
            this.userService.subirFoto(this.fotoSelecionada, this.user.id)
                .subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                    this.progreso = Math.round((event.loaded / event.total) * 100);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                    const response = event.body;
                    this.user = response.user;
                    this.modalUserService.notificarUpload.emit(this.user);
                    this.rutaFoto = 'Selecionar Foto';
                    this.fotoSelecionada = null;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'success',
                        title: 'La Foto se ha subido con Exito!',
                        text: response.mensaje,
                        footer: '',
                    });
                    // pendiente meter un time out
                    this.progreso = 0;
                }
            });
        }
    }
    cerrarModal() {
        this.modalUserService.cerrarModal();
        this.fotoSelecionada = null;
        this.progreso = 0;
    }
};
DetalleUserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_modal_user_service__WEBPACK_IMPORTED_MODULE_3__["ModalUserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetalleUserComponent.prototype, "user", void 0);
DetalleUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/detalle-user/detalle-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../generales/css/modal.css */ "./src/app/generales/css/modal.css")).default]
    })
], DetalleUserComponent);



/***/ }),

/***/ "./src/app/users/formularios/form-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/formularios/form-user.component.ts ***!
  \**********************************************************/
/*! exports provided: FormUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserComponent", function() { return FormUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/user */ "./src/app/users/interfaces/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _regiones_services_region_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../regiones/services/region.service */ "./src/app/regiones/services/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let FormUserComponent = class FormUserComponent {
    constructor(userService, router, regionService, activatedRoute, loadingService, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.regionService = regionService;
        this.activatedRoute = activatedRoute;
        this.loadingService = loadingService;
        this.formBuilder = formBuilder;
        this.minDate = new Date(1930, 1, 1);
        this.maxDate = new Date();
        this.user = new _interfaces_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.titulo = 'Crear Usuarios';
    }
    ngOnInit() {
        this.loadingService.abrirModal();
        this.crearFormulario();
        this.cargarUser();
    }
    cargarUser() {
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.userService.getUser(id).subscribe(user => {
                    this.user = user,
                        this.asignarDatosFormulario();
                });
            }
        });
        this.regionService.getRegionLista().subscribe(regiones => this.regiones = regiones);
        this.loadingService.cerrarModal();
    }
    create() {
        this.loadingService.abrirModal();
        this.asignarDatosParaGuardar();
        this.userService.create(this.user).subscribe(user => {
            this.router.navigate(['/users']),
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'success',
                    title: `Nuevo Usuario`,
                    text: `${user.nombre}`,
                    footer: `Creado con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
        });
    }
    update() {
        this.loadingService.abrirModal();
        this.asignarDatosParaGuardar();
        this.userService.update(this.user)
            .subscribe(user => {
            this.router.navigate(['/users']),
                // console.log(this.user),
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'success',
                    title: `Usuario`,
                    text: `${user.nombre}`,
                    footer: `Actualizado con Exito!`
                });
            this.loadingService.cerrarModal();
        }, err => {
            this.errores = err.error.errors;
            this.loadingService.cerrarModal();
        });
    }
    compararRegion(o1, o2) {
        if (o1 === undefined && o2 === undefined) {
            return true;
        }
        return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
    }
    // tratamiento a formulario
    crearFormulario() {
        this.formularioCreado = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20)
                ])],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20)
                ])],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email
                ])],
            celular1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)
                ])],
            celular2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)
                ])],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(7)
                ])],
            direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)
                ])],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
    }
    asignarDatosFormulario() {
        this.formularioCreado.setValue({
            nombre: this.user.nombre,
            apellido: this.user.apellido,
            documento: this.user.documento,
            email: this.user.email,
            celular1: this.user.celular1,
            celular2: this.user.celular2,
            telefono: this.user.telefono,
            direccion: this.user.direccion,
            region: this.user.region,
            fecha: this.user.fecha,
        });
    }
    asignarDatosParaGuardar() {
        this.user.nombre = this.formularioCreado.value.nombre,
            this.user.apellido = this.formularioCreado.value.apellido,
            this.user.documento = this.formularioCreado.value.documento,
            this.user.email = this.formularioCreado.value.email,
            this.user.celular1 = this.formularioCreado.value.celular1,
            this.user.direccion = this.formularioCreado.value.direccion,
            this.user.region = this.formularioCreado.value.region,
            this.user.fecha = this.formularioCreado.value.fecha;
        if (this.formularioCreado.value.celular2 !== '') {
            this.user.celular2 = this.formularioCreado.value.celular2;
        }
        if (this.formularioCreado.value.telefono !== '') {
            this.user.telefono = this.formularioCreado.value.telefono;
        }
    }
};
FormUserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _regiones_services_region_service__WEBPACK_IMPORTED_MODULE_4__["RegionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
FormUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/formularios/form-user.component.html")).default
    })
], FormUserComponent);



/***/ }),

/***/ "./src/app/users/guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/users/guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isAuthenticated()) {
            if (this.isTokenExpirado()) {
                this.authService.logout();
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    isTokenExpirado() {
        const token = this.authService.token;
        const payload = this.authService.obtenerDatosToken(token);
        const now = new Date().getTime() / 1000;
        if (payload.exp < now) {
            return true;
        }
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/users/guards/role.guard.ts":
/*!********************************************!*\
  !*** ./src/app/users/guards/role.guard.ts ***!
  \********************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let RoleGuard = class RoleGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        // tslint:disable-next-line: no-string-literal
        const role = next.data['role'];
        if (this.authService.hasRole(role)) {
            return true;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'warning',
            title: 'Acceso Denegado',
            text: `Hola ${this.authService.usuario.username}`,
            footer: 'No tienes acceso a este recurso',
        });
        this.router.navigate(['/clientes']);
        return true;
    }
};
RoleGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoleGuard);



/***/ }),

/***/ "./src/app/users/interceptors/auth.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/users/interceptors/auth.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AuthInterceptor = class AuthInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 401) {
                if (this.authService.isAuthenticated()) {
                    this.authService.logout();
                }
                this.router.navigate(['/login']);
            }
            if (e.status === 403) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'warning',
                    title: 'Acceso Denegado',
                    text: `Hola ${this.authService.usuario.username}`,
                    footer: 'No tienes acceso a este recurso',
                });
                this.router.navigate(['/clientes']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/users/interceptors/token.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/users/interceptors/token.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const token = this.authService.token;
        if (token != null) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/users/interfaces/user.ts":
/*!******************************************!*\
  !*** ./src/app/users/interfaces/user.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
        this.roles = [];
    }
}


/***/ }),

/***/ "./src/app/users/lista-users/users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/lista-users/users.component.ts ***!
  \******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_modal_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/modal-user.service */ "./src/app/users/services/modal-user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");










let UsersComponent = class UsersComponent {
    constructor(userService, modalUserService, activatedRoute, authService, loadingService, funcionesService) {
        this.userService = userService;
        this.modalUserService = modalUserService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.loadingService = loadingService;
        this.funcionesService = funcionesService;
        this.link = '/users/page';
    }
    ngOnInit() {
        this.titulo = this.funcionesService.setTitulo();
        this.loadingService.abrirModal();
        this.activatedRoute.paramMap.subscribe(params => {
            let page = +params.get('page');
            if (!page) {
                page = 0;
            }
            this.userService.getUsers(page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
                // console.log('UsersComponent: tap 3');
                response.content.forEach(user => {
                    this.loadingService.cerrarModal();
                    //  console.log(user.roles.length);
                });
            })).subscribe(response => {
                this.users = response.content;
                this.paginador = response;
            });
        });
        this.modalUserService.notificarUpload.subscribe(user => {
            this.users = this.users.map(userOriginal => {
                if (user.id === userOriginal.id) {
                    userOriginal.foto = user.foto;
                }
                return userOriginal;
            });
        });
    }
    delete(user) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: '¿ Estas Seguro ?',
            text: `¿Seguro De Eliminar Al Usuario ${user.nombre} ${user.apellido} ?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Usuario!'
        }).then((result) => {
            if (result.value) {
                this.userService.delete(user.id).subscribe(response => {
                    this.users = this.users.filter(cli => cli !== user);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Borrado!', `Usuario ${user.nombre} eliminado con Exito.`, 'success');
                });
            }
        });
    }
    abrirModal(user) {
        this.userSelecionado = user;
        this.modalUserService.abrirModal();
    }
    tipoUsuarios(num) {
        if (num === 1) {
            this.tipoUsuario = 'USUARIO';
        }
        else {
            this.tipoUsuario = 'ADMINISTRADOR';
        }
        return this.tipoUsuario;
    }
};
UsersComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_modal_user_service__WEBPACK_IMPORTED_MODULE_7__["ModalUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/lista-users/users.component.html")).default
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/user */ "./src/app/users/interfaces/user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/users/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generales/services/loading.service */ "./src/app/generales/services/loading.service.ts");
/* harmony import */ var _sucursales_services_sucursal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sucursales/services/sucursal.service */ "./src/app/sucursales/services/sucursal.service.ts");








let LoginComponent = class LoginComponent {
    constructor(authService, router, loadingService, sucursalService) {
        this.authService = authService;
        this.router = router;
        this.loadingService = loadingService;
        this.sucursalService = sucursalService;
        this.rol = 'USUARIO';
        this.opcionSeleccionado = '';
        this.verSeleccion = '';
        this.usuario = new _interfaces_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
        this.sucursalService.getSucursalLista().subscribe(sucursales => this.sucursales = sucursales);
        if (this.authService.isAuthenticated()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'info',
                title: '¡Informacion!',
                text: `Hola ${this.authService.usuario.username}`,
                footer: 'ya estás autenticado!',
            });
            this.loadingService.cerrarModal();
            this.router.navigate(['/clientes']);
        }
    }
    capturar() {
        // Pasamos el valor seleccionado a la variable verSeleccion
        this.verSeleccion = this.opcionSeleccionado;
    }
    login() {
        if (this.usuario.username === null || this.usuario.password === null
            || this.usuario.username === undefined || this.usuario.password === undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al Logear',
                text: 'El Usuario o el Password vacios',
                footer: 'Intente de nuevo',
            });
            return;
        }
        else if (this.verSeleccion === null || this.verSeleccion === '' || this.verSeleccion === undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error al Logear',
                text: 'Debe Selecionar Sucursal',
                footer: 'Intente de nuevo',
            });
            return;
        }
        sessionStorage.setItem('sucursal', JSON.stringify(this.verSeleccion));
        this.loadingService.abrirModal();
        this.authService.login(this.usuario).subscribe(response => {
            // console.log(response);
            // const payload = JSON.parse(atob(response.access_token.split('.')[1]));
            this.authService.guardarUsuario(response.access_token);
            this.authService.guardarToken(response.access_token);
            const usuario = this.authService.usuario;
            if (this.authService.hasRole('ROLE_ADMIN')) {
                this.rol = 'ADMINISTRADOR';
            }
            this.router.navigate(['/clientes']);
            this.loadingService.cerrarModal();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Bienvenido',
                text: `hola ${usuario.username}, has iniciado sesion con exito!`,
                footer: `Rol  ---${this.rol}--- `,
            });
        }, err => {
            if (err.status === 400) {
                this.loadingService.cerrarModal();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: 'Error al Logear',
                    text: 'El Usuario o el Password Incorrectos',
                    footer: 'Intente de nuevo',
                });
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _generales_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _sucursales_services_sucursal_service__WEBPACK_IMPORTED_MODULE_7__["SucursalService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/users/services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/users/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interfaces_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/user */ "./src/app/users/interfaces/user.ts");





let AuthService = class AuthService {
    constructor(http, funcionesService) {
        this.http = http;
        this.funcionesService = funcionesService;
    }
    get usuario() {
        if (this._usuario != null) {
            return this._usuario;
        }
        else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
            this._usuario = JSON.parse(sessionStorage.getItem('usuario'));
            return this._usuario;
        }
        return new _interfaces_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    get token() {
        if (this._token != null) {
            return this._token;
        }
        else if (this._token == null && sessionStorage.getItem('token') != null) {
            this._token = sessionStorage.getItem('token');
            return this._token;
        }
        return null;
    }
    login(usuario) {
        const urlEndpoint = `${this.funcionesService.setUrlBase()}oauth/token`;
        const credenciales = btoa('angularapp' + ':' + '12345');
        console.log(credenciales);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            // tslint:disable-next-line: object-literal-key-quotes
            'Authorization': 'Basic ' + credenciales
        });
        const params = new URLSearchParams();
        params.set('grant_type', 'password');
        params.set('username', usuario.username);
        params.set('password', usuario.password);
        // console.log(params.toString());
        return this.http.post(urlEndpoint, params.toString(), { headers: httpHeaders });
    }
    guardarUsuario(accessToken) {
        const payload = this.obtenerDatosToken(accessToken);
        this._usuario = new _interfaces_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this._usuario.id = payload.id;
        this._usuario.nombre = payload.nombre;
        this._usuario.apellido = payload.apellido;
        this._usuario.email = payload.email;
        this._usuario.username = payload.user_name;
        this._usuario.fecha = payload.fecha;
        this._usuario.createAt = payload.createAt;
        this._usuario.roles = payload.authorities;
        sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
    }
    guardarToken(accessToken) {
        this._token = accessToken;
        sessionStorage.setItem('token', accessToken);
    }
    obtenerDatosToken(accessToken) {
        if (accessToken != null) {
            return JSON.parse(atob(accessToken.split('.')[1]));
        }
        return null;
    }
    isAuthenticated() {
        const payload = this.obtenerDatosToken(this.token);
        if (payload != null && payload.user_name && payload.user_name.length > 0) {
            return true;
        }
        return false;
    }
    getUsuarioLogeado() {
        return sessionStorage.getItem('usuario');
    }
    hasRole(role) {
        if (this.usuario.roles.includes(role)) {
            return true;
        }
        return false;
    }
    logout() {
        this._token = null;
        this._usuario = null;
        sessionStorage.clear();
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('usuario');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/users/services/modal-user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/users/services/modal-user.service.ts ***!
  \******************************************************/
/*! exports provided: ModalUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUserService", function() { return ModalUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalUserService = class ModalUserService {
    constructor() {
        this.modal = false;
        // tslint:disable-next-line: variable-name
        this._notificarUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get notificarUpload() {
        return this._notificarUpload;
    }
    abrirModal() {
        this.modal = true;
    }
    cerrarModal() {
        this.modal = false;
    }
};
ModalUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalUserService);



/***/ }),

/***/ "./src/app/users/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../generales/services/funciones.service */ "./src/app/generales/services/funciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let UserService = class UserService {
    constructor(http, router, funcionesService) {
        this.http = http;
        this.router = router;
        this.funcionesService = funcionesService;
        this.urlEndPoint = `${this.funcionesService.setUrlBase()}api/users`;
    }
    getUsers(page) {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            // console.log('UserService: tap 1');
            response.content.forEach(user => {
                // console.log(user.nombre);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            response.content.map(user => {
                user.nombre = user.nombre.toUpperCase();
                return user;
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            // console.log('UserService: tap2');
            response.content.forEach(user => {
                // console.log(user.nombre);
            });
        }));
    }
    create(user) {
        return this.http.post(this.urlEndPoint, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    getUser(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status !== 401 && e.error.mensaje) {
                this.router.navigate(['/users']);
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    update(user) {
        return this.http.put(`${this.urlEndPoint}/${user.id}`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
        }));
    }
    subirFoto(archivo, id) {
        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('id', id);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', `${this.urlEndPoint}/uploadimguser`, formData, {
            reportProgress: true
        });
        return this.http.request(req);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _generales_services_funciones_service__WEBPACK_IMPORTED_MODULE_1__["FuncionesService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\javaScript-sucursales-tienda\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map