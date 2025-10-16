import { privacyPolicePageContent } from '@/lib/constants'
import { PrivacyPolicySection } from '@/lib/types'
import React from 'react'

const SectionPolicies = () => {
    const policies: PrivacyPolicySection[] = privacyPolicePageContent.policies
    return (
        <section className='w-full max-w-screen-xl mx-auto px-4 py-10 space-y-10'>
            {policies.map((policy, idx) => (
                <div key={idx} className='space-y-4'>
                    <h2 className='text-xl font-bold text-primary'>{policy.section}</h2>

                    {policy.description?.map((desc, i) => (
                        <p key={i} className='text-default text-lg font-medium leading-relaxed'>{desc}</p>
                    ))}

                    {policy.titleList && (
                        <>
                            <h3 className='text-lg text-primary font-semibold mt-4'>{policy.titleList}</h3>
                            <ul className='list-disc list-inside space-y-1 text-default font-normal'>
                                {policy.list?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {policy.titleList2 && (
                        <>
                            <h3 className='text-lg font-semibold mt-4'>{policy.titleList2}</h3>
                            <ul className='list-disc list-inside space-y-1 text-default'>
                                {policy.list2?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {policy.endSection && (
                        Array.isArray(policy.endSection) ? (
                            policy.endSection.map((text, i) => (
                                <p key={i} className='text-default leading-relaxed'>{text}</p>
                            ))
                        ) : (
                            <p className='text-default leading-relaxed'>{policy.endSection}</p>
                        )
                    )}
                </div>
            ))}
        </section>
    )
}

export default SectionPolicies