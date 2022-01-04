import { loadScript } from '@helper/utils';

let timer;

const initESW = (gslbBaseURL) => {
	// eslint-disable-next-line camelcase
	const { embedded_svc } = window as any;

	embedded_svc.addEventHandler('onHelpButtonClick', () => {
		// show loading until popup show
		timer = setInterval(() => {
			if (document.getElementsByClassName('embeddedServiceSidebar').length > 0) {
				clearInterval(timer);
			}
		}, 500);
	});

	embedded_svc.settings.displayHelpButton = false;
	// Or false
	embedded_svc.settings.language = '';
	// For example, enter 'en' or 'en-US'
	embedded_svc.settings.widgetHeight = '555px';
	embedded_svc.settings.prechatBackgroundImgURL =
		'//static.guitarcenter.com/static/gc/sfChat/prechatBackgroundImgURL.jpg';
	embedded_svc.settings.chatbotAvatarImgURL =
		'//static.guitarcenter.com/static/gc/sfChat/46651-Rockbot.jpg';

	embedded_svc.settings.enabledFeatures = ['LiveAgent'];
	embedded_svc.settings.entryFeature = 'LiveAgent';
	// Start custom settings here

	// Take the values form the prechat form and stamp them onto the case
	embedded_svc.settings.extraPrechatFormDetails = [
		{
			label: 'Email',
			transcriptFields: ['Email__c'],
		},
		{
			label: 'First Name',
			transcriptFields: ['First_Name__c'],
		},
		{
			label: 'Last Name',
			transcriptFields: ['Last_Name__c'],
		},
		{
			label: 'SiteVar',
			value: 'None',
			transcriptFields: ['SiteVar__c'],
			displayToAgent: true,
		},
		{
			label: 'CommunityPageURL',
			value: window.location.href,
			transcriptFields: ['CommunityPageURL__c'],
			displayToAgent: true,
		},
		{
			label: 'Page Type',
			value: 'None',
			transcriptFields: ['Page_Type__c'],
			displayToAgent: true,
		},
		{
			label: 'Brand Code',
			value: 'GC',
			transcriptFields: ['Brand_Code__c'],
			displayToAgent: true,
		},
	];

	// Searches for Person Account, if it matches, attach Person Account to Chat Transcript and Case
	// Does not create a contact if the customer does not exist in SFDC
	// Links the chat transcript to the Person Account

	embedded_svc.settings.extraPrechatInfo = [
		{
			entityName: 'Contact',
			entityFieldMaps: [
				{
					doCreate: false,
					doFind: true,
					fieldName: 'LastName',
					isExactMatch: true,
					label: 'Last Name',
				},
				{
					doCreate: false,
					doFind: true,
					fieldName: 'FirstName',
					isExactMatch: true,
					label: 'First Name',
				},
				{
					doCreate: false,
					doFind: true,
					fieldName: 'Email',
					isExactMatch: true,
					label: 'Email',
				},
			],
		},
		{
			entityName: 'Account',
			linkToEntityName: 'Case',
			linkToEntityField: 'AccountId',
			saveToTranscript: 'AccountId',
			showOnCreate: false,
			entityFieldMaps: [
				{
					doCreate: false,
					doFind: true,
					fieldName: 'RecordTypeId',
					isExactMatch: true,
					label: 'Record Type ID',
				},
				{
					doCreate: false,
					doFind: true,
					fieldName: 'FirstName',
					isExactMatch: true,
					label: 'First Name',
				},
				{
					doCreate: false,
					doFind: true,
					isExactMatch: true,
					fieldName: 'LastName',
					label: 'Last Name',
				},
				{
					doCreate: false,
					doFind: true,
					fieldName: 'PersonEmail',
					isExactMatch: true,
					label: 'Email',
				},
			],
		},
	];

	// End Custom Settings Here
	if (document.domain.startsWith('www')) {
		// GC Prod:2020-10-05
		embedded_svc.init(
			'https://gcinc.my.salesforce.com',
			'https://gcinc.force.com/CCSURVEY',
			gslbBaseURL,
			'00D61000000dAk7',
			'GC_Chat_Embedded_Service_Proactive_Chat',
			{
				baseLiveAgentContentURL: 'https://c.la3-c2-ia2.salesforceliveagent.com/content',
				deploymentId: '5724M000000Cob4',
				buttonId: '5734M0000004RYg',
				baseLiveAgentURL: 'https://d.la3-c2-ia2.salesforceliveagent.com/chat',
				eswLiveAgentDevName:
					'EmbeddedServiceLiveAgent_Parent04I4M0000008OJyUAM_17426697f8f',
				isOfflineSupportEnabled: true,
			},
		);
	} else {
		// GC Staging:2020-10-20
		embedded_svc.init(
			'https://gcinc--tracuat.my.salesforce.com',
			'https://tracuat-gcinc.cs63.force.com/CCSURVEY',
			gslbBaseURL,
			'00D6C0000000suT',
			'GC_Chat_Embedded_Service_no_Proactive_Chat',
			{
				baseLiveAgentContentURL: 'https://c.la2-c1cs-ia5.salesforceliveagent.com/content',
				deploymentId: '5724M000000Cob4',
				buttonId: '5734M0000004RYg',
				baseLiveAgentURL: 'https://d.la2-c1cs-ia5.salesforceliveagent.com/chat',
				eswLiveAgentDevName:
					'EmbeddedServiceLiveAgent_Parent04I4M0000008OJrUAM_1742375ba37',
				isOfflineSupportEnabled: true,
			},
		);
	}

	setTimeout(() => {
		// open live chat popup
		embedded_svc.onHelpButtonClick();
	}, 100);

	loadScript({
		src: 'https://service.force.com/embeddedservice/5.0/client/liveagent.esw.min.js',
		strategy: 'afterInteractive',
	});
	loadScript({
		src: process.env.NEXT_PUBLIC_ADOBE_DTM_URL,
		strategy: 'afterInteractive',
	});
};

const loadEmbeddedSvc = () => {
	if (!window.embedded_svc) {
		const script = document.createElement('script');
		script.setAttribute(
			'src',
			'https://nibc--Dvl.cs107.my.salesforce.com/embeddedservice/5.0/esw.min.js',
		);
		script.onload = () => {
			initESW(null);
		};
		document.body.appendChild(script);
	} else {
		initESW('https://service.force.com');
	}
};

const loadEmbeddedScript = () => {
	loadScript({
		src: 'https://service.force.com/embeddedservice/5.0/esw.min.js',
		strategy: 'afterInteractive',
		onLoad: () => {
			loadEmbeddedSvc();
		},
	});
};

export function initLiveChat(): void {
	if (typeof window !== undefined) {
		if (window.$) {
			loadEmbeddedScript();
		} else {
			// load jquery first
			loadScript({
				src: process.env.NEXT_PUBLIC_JQUERY_URL,
				strategy: 'afterInteractive',
				onLoad: () => {
					loadEmbeddedScript();
				},
			});
		}
	}
}

export function startLiveChat(): void {
	const { embedded_svc: embeddedSvc } = window as any;
	if (
		embeddedSvc &&
		embeddedSvc?.onHelpButtonClick &&
		typeof embeddedSvc?.onHelpButtonClick === 'function'
	) {
		embeddedSvc.onHelpButtonClick();
	} else {
		initLiveChat();
	}
}
