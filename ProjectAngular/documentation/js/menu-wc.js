'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fec1f219619395659b5992c8dbde289be25aa71b31a32f158a9fd367c95e9779ceedc4b3543e4dde004b49debf9d0e5cb45289ed4712da57e5c19b3dc58b7291"' : 'data-target="#xs-components-links-module-AppModule-fec1f219619395659b5992c8dbde289be25aa71b31a32f158a9fd367c95e9779ceedc4b3543e4dde004b49debf9d0e5cb45289ed4712da57e5c19b3dc58b7291"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fec1f219619395659b5992c8dbde289be25aa71b31a32f158a9fd367c95e9779ceedc4b3543e4dde004b49debf9d0e5cb45289ed4712da57e5c19b3dc58b7291"' :
                                            'id="xs-components-links-module-AppModule-fec1f219619395659b5992c8dbde289be25aa71b31a32f158a9fd367c95e9779ceedc4b3543e4dde004b49debf9d0e5cb45289ed4712da57e5c19b3dc58b7291"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeenitemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeenitemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WatchitemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchitemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WatchlistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchlistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MovieModule.html" data-type="entity-link" >MovieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' : 'data-target="#xs-components-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' :
                                            'id="xs-components-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' }>
                                            <li class="link">
                                                <a href="components/MovieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' : 'data-target="#xs-injectables-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' :
                                        'id="xs-injectables-links-module-MovieModule-f7d54af6829e72ec3574e5cddae9ee60e19172e0412d6054d5e880593efbaf02f8761926e8f3b9a8862c8c8992a5e15bf135e2d750b16f1fc6dd7ef0162b08f0"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-af8886bef4f82bf61fcb741fa11602b65ae4ff03f94dec4eb8cc137c5b8e80894d2b51a52db0f2230a945d6008cf55da079bb89aa56fbf9c960b0c50507054c1"' : 'data-target="#xs-pipes-links-module-SharedModule-af8886bef4f82bf61fcb741fa11602b65ae4ff03f94dec4eb8cc137c5b8e80894d2b51a52db0f2230a945d6008cf55da079bb89aa56fbf9c960b0c50507054c1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-af8886bef4f82bf61fcb741fa11602b65ae4ff03f94dec4eb8cc137c5b8e80894d2b51a52db0f2230a945d6008cf55da079bb89aa56fbf9c960b0c50507054c1"' :
                                            'id="xs-pipes-links-module-SharedModule-af8886bef4f82bf61fcb741fa11602b65ae4ff03f94dec4eb8cc137c5b8e80894d2b51a52db0f2230a945d6008cf55da079bb89aa56fbf9c960b0c50507054c1"' }>
                                            <li class="link">
                                                <a href="pipes/ShortenContentPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShortenContentPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link" >MovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovieService-1.html" data-type="entity-link" >MovieService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Movie.html" data-type="entity-link" >Movie</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});