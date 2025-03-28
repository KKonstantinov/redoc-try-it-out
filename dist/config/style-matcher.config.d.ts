/// <reference types="jquery" />
/// <reference types="jquery.scrollto" />
import { StyleMatcherOptions } from '../interfaces/style-matcher-options.interface';
import { Config } from './config';
import { SwaggerConfig } from './swagger-config';
import { RedocTryItOutConfig } from './redoc-try-it-out-config';
export declare class StyleMatcherConfig extends Config<StyleMatcherOptions> implements StyleMatcherOptions {
    private readonly swaggerConfig;
    private readonly redocConfig;
    private readonly _informationContainerTargetSelector;
    private readonly _schemeContainerTargetSelector;
    private readonly _modelsContainerTargetSelector;
    private readonly _inputTargetSelector;
    private readonly _selectTargetSelector;
    private readonly _textAreaTargetSelector;
    private readonly _paragraphTargetSelector;
    private readonly _executeBtnTargetSelector;
    private readonly _responseContainerTargetSelector;
    private readonly _responseTitleTargetSelector;
    private readonly _responseHeaderTargetSelector;
    private readonly _responseTableTargetSelector;
    private readonly _responseWrapperTargetSelector;
    private readonly _responseWrapperResultTargetSelector;
    private readonly _responseMicrolightTargetSelector;
    private readonly _responseCodeTargetSelector;
    private readonly _responseClipboardTargetSelector;
    private readonly _responseClipboardBtnTargetSelector;
    private readonly _responseCurlClipboardTargetSelector;
    private readonly _responseDownloadTargetSelector;
    private readonly _serverResponseHeaderTargetSelector;
    private readonly _serverResponseStatusTargetSelector;
    private readonly _serverResponseDescriptionTargetSelector;
    private readonly _serverResponseSubHeaderTargetSelector;
    private readonly _clearBtnTargetSelector;
    private readonly _operationTagTargetSelector;
    private readonly _operationHeaderContainerTargetSelector;
    private readonly _operationHeaderTargetSelector;
    private readonly _operationHeaderDecorationTargetSelector;
    private readonly _operationTryOutTargetSelector;
    private readonly _descriptionContainerTargetSelector;
    private readonly _summaryTargetSelector;
    private readonly _modalHeaderContainerTargetSelector;
    private readonly _modalHeaderTargetSelector;
    private readonly _modalTitleTargetSelector;
    private readonly _modalTitleCodeTargetSelector;
    private readonly _modalLabelTargetSelector;
    private readonly _modalCodeTargetSelector;
    private readonly _modalBtnTargetSelector;
    private readonly _parametersTableContainerTargetSelector;
    private readonly _parametersHeadTargetSelector;
    private readonly _parameterNameFieldTargetSelector;
    private readonly _parameterTypeFieldTargetSelector;
    private readonly _parameterDeprecatedTargetSelector;
    private readonly _parameterSourceTargetSelector;
    private readonly _parameterRequiredMarkerTargetSelector;
    private readonly _parameterRequiredTargetSelector;
    private readonly _apiContentSourceSelector;
    private readonly _inputSourceSelector;
    private readonly _codeSourceSelector;
    private readonly _codeBoxSourceSelector;
    private readonly _dataSectionSourceSelector;
    private readonly _fieldSourceSelector;
    private readonly _requiredFieldSourceSelector;
    private readonly _fieldMarkerSourceSelector;
    private readonly _sanSerifFontSourceSelector;
    private readonly _alternativeMonospaceFontSourceSelector;
    private readonly _alternativeSansSerifSourceSelector;
    private readonly _h2SourceSelector;
    private readonly _h3SourceSelector;
    private readonly _h5SourceSelector;
    private readonly _labelSourceSelector;
    private readonly _typeSourceSelector;
    private readonly _btnSourceSelector;
    private readonly _defaultBorderColorSelector;
    private readonly _authBtnSourceSelector;
    private readonly _httpVerbSourceSelector;
    constructor(cfg: StyleMatcherOptions, swaggerConfig: SwaggerConfig, redocConfig: RedocTryItOutConfig);
    get openedInformationContainerTargetSelector(): string;
    get openedSchemeContainerTargetSelector(): string;
    get openedModelsContainerTargetSelector(): string;
    get operationContainerTargetSelector(): string;
    get openedOperationContainerSelector(): string;
    get inputTargetSelector(): string;
    get selectTargetSelector(): string;
    get textAreaTargetSelector(): string;
    get paragraphTargetSelector(): string;
    get executeBtnTargetSelector(): string;
    get responseTableTargetSelector(): string;
    get responseWrapperTargetSelector(): string;
    get responseWrapperResultTargetSelector(): string;
    get operationSectionTargetSelector(): string;
    get openedOperationSectionSelector(): string;
    get operationTagTargetSelector(): string;
    get operationHeaderContainerTargetSelector(): string;
    get clearBtnTargetSelector(): string;
    get operationHeaderTargetSelector(): string;
    get responseHeaderTargetSelector(): string;
    get responseMicrolightTargetSelector(): string;
    get responseCodeTargetSelector(): string;
    get responseContainerTargetSelector(): string;
    get descriptionContainerTargetSelector(): string;
    get serverResponseSubHeaderTargetSelector(): string;
    get serverResponseHeaderTargetSelector(): string;
    get serverResponseStatusTargetSelector(): string;
    get serverResponseDescriptionTargetSelector(): string;
    get responseClipboardTargetSelector(): string;
    get responseClipboardBtnTargetSelector(): string;
    get responseCurlClipboardTargetSelector(): string;
    get responseDownloadTargetSelector(): string;
    get modalTargetSelector(): string;
    get modalHeaderContainerTargetSelector(): string;
    get modalHeaderTargetSelector(): string;
    get modalTitleTargetSelector(): string;
    get modalLabelTargetSelector(): string;
    get modalTitleCodeTargetSelector(): string;
    get modalCodeTargetSelector(): string;
    get modalBtnTargetSelector(): string;
    get operationHeaderDecorationTargetSelector(): string;
    get parametersTableContainerTargetSelector(): string;
    get parametersHeadTargetSelector(): string;
    get parameterNameFieldTargetSelector(): string;
    get parameterTypeFieldTargetSelector(): string;
    get parameterDeprecatedTargetSelector(): string;
    get parameterSourceTargetSelector(): string;
    get parameterRequiredMarkerTargetSelector(): string;
    get parameterRequiredTargetSelector(): string;
    get operationTryOutTargetSelector(): string;
    get summaryTargetSelector(): string;
    get responseTitleTargetSelector(): string;
    get apiContentSourceSelector(): string;
    get inputSourceSelector(): string;
    get $inputSource(): JQuery;
    get codeSourceSelector(): string;
    get $codeSource(): JQuery;
    get codeBoxSourceSelector(): string;
    get $codeBoxSource(): JQuery;
    get dataSectionSourceSelector(): string;
    get $dataSectionSource(): JQuery;
    get fieldSourceSelector(): string;
    get $fieldSource(): JQuery;
    get requiredFieldSourceSelector(): string;
    get $requiredFieldSource(): JQuery;
    get fieldMarkerSourceSelector(): string;
    get $fieldMarkerSource(): JQuery;
    get alternativeMonospaceFontSourceSelector(): string;
    get $alternativeMonospaceFontSource(): JQuery;
    get sanSerifFontSourceSelector(): string;
    get $sanSerifFontSource(): JQuery;
    get alternativeSansSerifSourceSelector(): string;
    get h2SourceSelector(): string;
    get $h2Source(): JQuery;
    get h3SourceSelector(): string;
    get $h3Source(): JQuery;
    get h5SourceSelector(): string;
    get $h5Source(): JQuery;
    get labelSourceSelector(): string;
    get $labelSource(): JQuery;
    get typeSourceSelector(): string;
    get $typeSource(): JQuery;
    get btnSourceSelector(): string;
    get $btnSource(): JQuery;
    get defaultBorderColorSelector(): string;
    get defaultBorderColor(): string;
    get defaultBackgroundColor(): string;
    get authBtnSourceSelector(): string;
    get $authBtnSource(): JQuery;
    get authBtnClassesSource(): string;
    get httpVerbSourceSelector(): string;
    get $httpVerbSource(): JQuery;
}
